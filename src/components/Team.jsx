import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTeamMembers } from '../hooks/useSanityData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { LoadingState, EmptyState } from './LoadingState';
import './Team.css';

const Team = () => {
  const { data: teamData, loading, error } = useTeamMembers();
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [mainBarberRef, isMainBarberVisible] = useScrollAnimation(0.1);
  const [teamMembersRef, isTeamMembersVisible] = useScrollAnimation(0.1);

  // Separar el barbero principal de los demás
  const { mainBarber, otherMembers } = useMemo(() => {
    if (!teamData) return { mainBarber: null, otherMembers: [] };
    
    const main = teamData.find(member => member.isMain);
    const others = teamData.filter(member => !member.isMain);
    
    return { mainBarber: main, otherMembers: others };
  }, [teamData]);

  // Debug logs
  React.useEffect(() => {
    console.log('👥 Team state:', { 
      loading, 
      error,
      teamDataCount: teamData?.length, 
      teamData,
      mainBarber, 
      otherMembersCount: otherMembers?.length,
      otherMembers
    });
  }, [loading, error, teamData, mainBarber, otherMembers]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const membersVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const memberVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="team" className="team-section">
      <div className="container">
        <motion.div 
          ref={headerRef}
          className="team-header"
          variants={containerVariants}
          initial="hidden"
          animate={isHeaderVisible ? "visible" : "hidden"}
        >
          <h2 className="team-title">Nuestro Equipo</h2>
          <p className="team-subtitle">Profesionales dedicados a tu estilo</p>
        </motion.div>
        
        {loading && <LoadingState message="Cargando equipo..." />}
        {error && <EmptyState message="Error al cargar el equipo. Por favor, recarga la página." />}
        {!loading && !error && (!teamData || teamData.length === 0) && (
          <EmptyState message="No hay miembros del equipo. Agrega miembros desde el panel de Sanity." />
        )}
        <div className="team-container">
          {/* Main Barber */}
          {!loading && mainBarber && (
            <motion.div 
              ref={mainBarberRef}
              className="main-barber-card"
              variants={cardVariants}
              initial="visible"
              animate="visible"
            >
              <div className="barber-image">
                {(() => {
                  const imageUrl = mainBarber.imageUrl || mainBarber.image?.asset?.url || null;
                  const hasImage = imageUrl && imageUrl.trim() !== '';
                  console.log('👔 Main barber:', { name: mainBarber.name, imageUrl, hasImage });
                  return hasImage ? (
                    <img src={imageUrl} alt={`${mainBarber.name} - ${mainBarber.role}`} />
                  ) : (
                    <div className="barber-image-placeholder">
                      <span>Sin imagen</span>
                      <small>Sube desde Sanity</small>
                    </div>
                  );
                })()}
                <div className="barber-overlay">
                  <div className="barber-badge">Principal</div>
                </div>
              </div>
              <div className="barber-content">
                <h3 className="barber-name">{mainBarber.name}</h3>
                <p className="barber-title">{mainBarber.role}</p>
                {mainBarber.description && (
                  <p className="barber-description">{mainBarber.description}</p>
                )}
                {mainBarber.specialties && mainBarber.specialties.length > 0 && (
                  <div className="barber-specialties">
                    {mainBarber.specialties.map((specialty, index) => (
                      <span key={index} className="specialty">{specialty}</span>
                    ))}
                  </div>
                )}
                {mainBarber.requiresBooking && (
                  <div className="barber-requires-booking">
                    <span className="booking-required">Requiere agendar</span>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Team Members */}
          {!loading && (!otherMembers || otherMembers.length === 0) && mainBarber && (
            <div style={{ textAlign: 'center', color: '#999', padding: '2rem' }}>
              <p>No hay otros miembros del equipo.</p>
            </div>
          )}
          {!loading && otherMembers && otherMembers.length > 0 && (
            <motion.div 
              ref={teamMembersRef}
              className="team-members"
              variants={membersVariants}
              initial="visible"
              animate="visible"
            >
              {otherMembers.map((member) => {
                const imageUrl = member.imageUrl || member.image?.asset?.url || null;
                const hasImage = imageUrl && imageUrl.trim() !== '';
                console.log('👤 Team member:', { name: member.name, imageUrl, hasImage });
                return (
                <motion.div 
                  key={member._id}
                  className="team-member-card"
                  variants={memberVariants}
                  initial="visible"
                  animate="visible"
                >
                  <div className="member-image">
                    {hasImage ? (
                      <img src={imageUrl} alt={member.name} />
                    ) : (
                      <div className="member-image-placeholder">
                        <span>Sin imagen</span>
                        <small>Sube desde Sanity</small>
                      </div>
                    )}
                  </div>
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-role">{member.role}</p>
                </motion.div>
              );
              })}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
