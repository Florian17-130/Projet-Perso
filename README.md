# Audit&Pentest-infrastructure
Audit &amp; Pentest d'une infrastructure - Projets réalisés chez Guardia School PRO


Dossier_Projet (Audit) :

Dans le cadre de ma préparation au sein de la Guardia Cybersecurity School, j'ai suivi un parcours de formation visant à acquérir les 
compétences inscrites dans le bloc de compétence n°3 du référentiel RNCP37680BC03 – Titre Professionnel Administrateur d'Infrastructures Sécurisées.

Ce dossier a pour objectif de valoriser les travaux réalisés durant cette formation, en mettant en évidence l'application concrète des 
compétences attendues. 

Les compétences mobilisées, telles qu'elles sont définies dans le  référentiel, couvrent notamment :
1) Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure
2) Participer à l’élaboration et à la mise en œuvre de la politique de sécurité
3) Participer à la détection et au traitement des incidents de sécurité

L'infrastructure PROSECUREX utilisée pour ce projet est un environnement de simulation hébergé chez OVH. Ce dispositif est mis à 
disposition par Guardia afin de répondre aux exigences pratiques de la certification RNCP37680BC03.

L'audit à été réalisé en mode "White-Box", s'appuyant sur une visibilité complète des systèmes et des configurations de PROSECUREX. En 
l'absence d'un environnement de test dédié (LAB), l'ensemble des analyses a été effectué directement sur l'infrastructure de production. Afin de garantir la continuité de service sur l'infrastructure de production, l'audit privilégie des analyses non-intrusives planifiés avec le DSI, tout en prenant des snapshots avant chaque intervention technique pour plus de sécurité.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Dossier_Professionnel (Pentest):

Dans le cadre de ma formation en cybersécurité, j’ai réalisé un pentest de type “boite noir” sur un serveur 
pour l’entreprise “Thales”.

Le pentest s’est déroulé dans un environnement de LAB hors production, afin de tester la configuration et 
trouver des éventuels failles présentes sur le système avant sa mise en production réel.

L’objectif de ce pentest était de : 
1) Identifier les vulnérabilités présentes sur le système
2) Exploiter les failles détectées afin d’obtenir un accès initial
3) Analyser les erreurs de configuration du système
4) Réaliser une élévation de privilèges jusqu’à l’utilisateur administrateur (root)

L’attaque a été réalisée depuis une machine “Kali Linux”, qui intègre de nombreux outils spécialisés dans 
l’analyse de sécurité et les tests d’intrusion.
