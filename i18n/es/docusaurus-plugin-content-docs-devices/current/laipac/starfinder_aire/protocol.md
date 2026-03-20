---
slug: /laipac/starfinder_aire/protocol
id: starfinder_aire-protocol
sidebar_label: Protocol
title: Laipac - StarFinder AIRE Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del Laipac StarFinder AIRE y cómo se comunica con Plaspy para rastreo y monitoreo
keywords:
  - protocolo Laipac StarFinder AIRE
  - protocolo GPS StarFinder AIRE
  - protocolo Laipac Plaspy
  - compatibilidad rastreador GPS Plaspy
  - comunicación StarFinder AIRE
  - rastreo vehicular Laipac
  - integración StarFinder AIRE
  - rastreo de flotas Laipac
  - visión general protocolo dispositivo GPS
  - protocolo monitor remoto rastreador
---

# Laipac - Protocolo StarFinder AIRE

Esta página describe el contexto público del protocolo para usar el rastreador Laipac StarFinder AIRE con Plaspy. Se centra en cómo el dispositivo se comunica con los servidores de Plaspy en términos no sensibles, qué papel cumple el protocolo de reporte y consideraciones prácticas para conectar y operar el rastreador dentro de Plaspy. El resumen técnico está pensado para administradores de flotas, integradores y usuarios técnicos que necesitan orientación clara sobre la comunicación del dispositivo sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los dispositivos están configurados correctamente para reportar. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la información aquí es general y complementa la documentación oficial de Laipac. El StarFinder AIRE ofrece funciones como geocercas, detección de movimiento, configuración por aire (OTA) y relés, todas dependientes de reportes fiables a una plataforma compatible como Plaspy.

## Resumen del protocolo

El protocolo del rastreador define cómo el StarFinder AIRE informa posición, alertas y estado a un servidor remoto. A alto nivel, el protocolo permite que el dispositivo se identifique, transmita datos GPS y de sensores, y reciba actualizaciones de configuración o comandos cuando eso es compatible. Plaspy ingiere esos reportes y los pone a disposición para seguimiento, alertas y flujos operativos.

- Permite la transmisión de ubicación, alertas de movimiento y actualizaciones de estado desde el dispositivo hacia Plaspy
- Soporta la identificación del dispositivo para que Plaspy asocie los datos entrantes con el activo correcto
- Transporta información de sensores y entradas que alimentan alertas de geocerca, movimiento y exceso de velocidad
- Puede incluir mensajes periódicos de latido y estado de energía usados para monitorear la salud del dispositivo
- Puede soportar comandos de configuración por aire dependiendo del firmware y las políticas del fabricante

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de dispositivos en un endpoint y puerto compartidos y usa detección automática para determinar el protocolo del rastreador. Cuando el StarFinder AIRE está configurado para reportar a Plaspy, la plataforma reconoce el formato del dispositivo y enruta los datos al pipeline de procesamiento apropiado, por lo que generalmente no es necesario que el usuario seleccione el protocolo manualmente.

- El dominio del servidor Plaspy es d.plaspy.com, al que los dispositivos pueden apuntar para reportar
- La IP del servidor Plaspy es 54.85.159.138 y es un endpoint alterno que algunos integradores usan
- El puerto usado para todos los dispositivos en Plaspy es 8888 y es común entre el hardware soportado
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según soporte y necesidades de red
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo reporta a la plataforma
- Normalmente no hace falta seleccionar un protocolo dentro de Plaspy si el rastreador apunta al endpoint correcto de Plaspy

## Transporte y contexto de la conexión

Las elecciones de conexión afectan la confiabilidad, latencia y configuración de firewall. El StarFinder AIRE puede configurarse para usar UDP o TCP según el firmware y la interfaz de configuración del dispositivo. Conocer los detalles de transporte y endpoint ayuda con la configuración de red y la puesta en marcha inicial del equipo.

- El dispositivo puede configurarse para usar UDP en el puerto 8888 para reportes con menor overhead
- El dispositivo puede configurarse para usar TCP en el puerto 8888 para entrega orientada a conexión cuando esté soportado
- Los dispositivos pueden reportar al dominio d.plaspy.com o directamente a la IP 54.85.159.138
- El puerto 8888 es el puerto compartido usado por todos los dispositivos conectados a Plaspy
- Elija el transporte en función de la estabilidad de la red, reglas de firewall y opciones de configuración del dispositivo
- Verifique que el dispositivo esté apuntando al endpoint de Plaspy antes de esperar detección automática

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar el contenido de los mensajes, las funciones disponibles y los comandos OTA
- Las revisiones de hardware pueden afectar las E/S disponibles, el reporte de sensores o las características de la antena
- Las opciones de configuración del lado del fabricante y las compilaciones de firmware pueden generar pequeñas diferencias en el protocolo
- La selección de transporte entre UDP y TCP puede influir en la entrega y debe coincidir con la configuración del dispositivo
- Confirme el endpoint de reporte del dispositivo y las credenciales cuando apliquen antes del despliegue
- Valide la disponibilidad de funciones como relés, geocercas y alertas de energía según el nivel de firmware del dispositivo
- Revise siempre las notas de lanzamiento del fabricante para cambios específicos de firmware que afecten el comportamiento del protocolo

## Por qué importa comprender el protocolo

Tener una comprensión práctica del protocolo del rastreador ayuda en la configuración, solución de problemas y confiabilidad a largo plazo al integrar el StarFinder AIRE con Plaspy. Incluso cuando Plaspy maneja la detección automática del protocolo, conocer cómo reporta el dispositivo y qué afecta su comportamiento acelera la resolución de problemas de conectividad o datos.

- Asegura que se apliquen los ajustes de servidor y transporte correctos durante el aprovisionamiento del dispositivo
- Ayuda a diagnosticar por qué un dispositivo puede no aparecer en Plaspy o por qué faltan alertas
- Informa decisiones sobre firewall y configuración de red para un reporte estable
- Orienta sobre actualizaciones de firmware y cómo pueden afectar integraciones existentes
- Facilita la confirmación de que los eventos de sensores y entradas se transmiten como se espera
- Apoya la planificación para escenarios de despliegue como roaming internacional o redes con restricciones

## Por qué usar Plaspy con este protocolo

Usar el Laipac StarFinder AIRE con Plaspy ofrece a las organizaciones visibilidad centralizada de ubicación, alertas de movimiento y estado del dispositivo, aprovechando el manejo automático de protocolos de Plaspy. La combinación es útil para monitorear vehículos pequeños, equipos y activos donde el tamaño compacto del hardware, la impermeabilización y las entradas de sensores son prioridades. Plaspy normaliza los reportes entrantes para que los equipos puedan concentrarse en alertas, geocercas y flujos operativos en lugar de parseo a bajo nivel.

Para aprender más sobre Plaspy y cómo soporta integraciones de dispositivos, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, así que verifique la información más reciente específica del dispositivo en el sitio oficial del fabricante https://laipac.com/ antes de desplegar a gran escala.
