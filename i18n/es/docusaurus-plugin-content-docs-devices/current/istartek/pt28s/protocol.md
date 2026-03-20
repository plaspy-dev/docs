---
slug: /istartek/pt28s/protocol
id: pt28s-protocol
sidebar_label: Protocol
title: iStartek - PT28S Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador GPS portátil iStartek PT28S y su comunicación con Plaspy
keywords:
  - protocolo iStartek PT28S
  - protocolo GPS iStartek PT28S
  - protocolo PT28S Plaspy
  - protocolo de comunicación PT28S
  - protocolo de rastreo PT28S
  - protocolo GPS portátil iStartek
  - compatibilidad rastreadores Plaspy
  - comunicación rastreador GPS Plaspy
  - protocolo rastreador seguridad personal
  - protocolo telemetría PT28S
---

# iStartek - Protocolo PT28S

Esta página ofrece contexto público sobre el protocolo utilizado por el reloj rastreador GPS 4G iStartek PT28S y su integración con la plataforma Plaspy. Explica, en términos generales y sin información sensible, cómo el dispositivo comunica ubicación, telemetría y eventos para que integradores y operadores comprendan el papel del protocolo en el despliegue cotidiano y la resolución de problemas.

El PT28S es un dispositivo resistente y portátil que combina GPS, Beidou, Wi‑Fi y posicionamiento LBS con conectividad celular global, botón SOS y telemetría de salud. Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el comportamiento del equipo puede diferir ligeramente entre producciones o actualizaciones de firmware.

## Resumen del protocolo

A alto nivel, el protocolo del dispositivo es el conjunto de reglas que el PT28S usa para identificarse y enviar datos de ubicación, telemetría y eventos a Plaspy. El protocolo define cómo el reloj reporta fijaciones de posición, eventos SOS, telemetría de salud e información básica de estado para que Plaspy pueda presentar datos oportunos y accionables a los usuarios.

- Permite al PT28S enviar actualizaciones periódicas de ubicación y mensajes por eventos como SOS o alertas por caída al backend.
- Transporta elementos de telemetría como frecuencia cardíaca, conteo de pasos y señales de monitoreo remoto junto con los datos posicionales.
- Proporciona información de identidad y sesión para que Plaspy asocie los informes entrantes con el registro de dispositivo correcto.
- Facilita la coordinación de actualizaciones remotas de parámetros y señales de control de firmware por parte de los sistemas de gestión.
- Asegura que Plaspy reciba el contexto suficiente para generar alertas, poblar paneles y soportar la reproducción histórica.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un endpoint y puerto compartidos y aplica detección de protocolo automática, por lo que la mayoría de los dispositivos correctamente configurados aparecen sin necesidad de seleccionar el protocolo manualmente. Eso significa que un PT28S apuntado al endpoint de Plaspy y usando el transporte correcto generalmente será reconocido por la plataforma.

- El endpoint público del servidor de Plaspy es d.plaspy.com y la dirección IP asociada es 54.85.159.138.
- Plaspy escucha en el puerto 8888 y todos los dispositivos compatibles usan ese mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint y puerto compartidos.
- En configuraciones típicas, usted no necesita elegir un protocolo dentro de Plaspy si el rastreador está configurado para reportar al endpoint de Plaspy.
- Si un dispositivo no es detectado, las causas comunes incluyen dirección de servidor incorrecta, desajuste de transporte o diferencias en la configuración del firmware.

## Transporte y contexto de conexión

El transporte de conexión y el destino forman parte del contexto de despliegue del PT28S. El dispositivo puede configurarse para reportar por UDP o TCP según el soporte del dispositivo y la configuración elegida. Estas decisiones afectan la forma en que se entregan los datos, pero no cambian el propósito general del protocolo.

- El PT28S puede configurarse para usar UDP o TCP en el puerto 8888 según las opciones del dispositivo y el entorno de red.
- Los dispositivos destinados a reportar a Plaspy deben apuntar a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy utiliza el mismo puerto único 8888 para todos los rastreadores soportados para simplificar la configuración.
- Las condiciones de la red y el comportamiento del operador pueden influir en si UDP o TCP es más recomendable para una transmisión fiable.
- Al cambiar el tipo de transporte, asegúrese de que el firmware del dispositivo y el perfil de la SIM admitan el modo de transporte elegido.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de los mensajes, los elementos de telemetría disponibles o campos opcionales; confirme siempre el nivel de firmware al evaluar compatibilidad.
- Las revisiones de hardware y las variantes regionales del producto pueden modificar los GNSS admitidos, las bandas celulares o la disponibilidad de sensores, y por ende afectar los datos que envía el dispositivo.
- La configuración o los valores predeterminados del fabricante pueden habilitar distintos transportes o intervalos de reporte desde fábrica.
- Elegir UDP frente a TCP puede impactar la fiabilidad de entrega y el consumo de batería; seleccione según la cobertura y la configuración del dispositivo.
- Valide la compatibilidad y los parámetros recomendados contra la documentación oficial de iStartek y las notas de versión del PT28S.
- La detección automática de Plaspy reduce la configuración manual, pero la dirección de servidor y el transporte deben configurarse correctamente en el dispositivo.

## Por qué es importante comprender el protocolo

Comprender el protocolo de reporte del rastreador ayuda a asegurar una configuración fluida, un comportamiento predecible en campo y una resolución eficaz de problemas cuando los eventos no aparecen como se espera en Plaspy. Conocer cómo se comunica el equipo permite resolver más rápido problemas de conectividad, frecuencia de reporte y visibilidad de telemetría.

- Ayuda a confirmar que el dispositivo apunta al endpoint y transporte correctos de Plaspy para una entrega de datos exitosa.
- Facilita interpretar por qué cierta telemetría o eventos aparecen o faltan en la plataforma.
- Permite tomar decisiones informadas sobre configuraciones como intervalos de reporte y selección de transporte.
- Favorece la coordinación con operadores de red cuando la conectividad celular o problemas de NAT afectan la entrega.
- Hace más sencillo validar que las actualizaciones remotas de parámetros y la gestión de firmware se aplican como corresponde.

## Por qué usar Plaspy con este protocolo

Combinar el PT28S con Plaspy ofrece a las organizaciones una forma directa de integrar la ubicación y la telemetría de seguridad de dispositivos portátiles en un entorno de monitoreo centralizado. Plaspy agrega fijaciones de posición, eventos SOS y señales de salud para que cuidadores, equipos operativos y responsables de seguridad mantengan visibilidad continua, reciban alertas y revisen recorridos históricos.

El endpoint compartido de Plaspy y la detección automática de protocolo simplifican los despliegues en entornos con múltiples dispositivos y reducen la necesidad de gestionar puertos o endpoints separados para cada modelo de rastreador. Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, comportamiento del firmware y notas de implementación del fabricante, verifique la información actual en el sitio del fabricante en https://istartek.com/.
