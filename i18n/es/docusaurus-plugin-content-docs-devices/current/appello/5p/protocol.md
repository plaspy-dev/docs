---
slug: /appello/5p/protocol
id: 5p-protocol
sidebar_label: Protocol
title: Appello - 5P Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del rastreador Appello 5P y cómo se comunica con Plaspy para un rastreo confiable
keywords:
  - protocolo Appello 5P
  - protocolo GPS Appello 5P
  - protocolo de comunicación Appello 5P
  - protocolo de rastreo Appello 5P
  - rastreador GPS Appello Plaspy
  - compatibilidad Appello 5P
  - protocolo GPRS GPS
  - rastreo vehicular Appello 5P
  - protocolo de dispositivo Plaspy
  - integración protocolo rastreador
---

# Appello - Protocolo 5P

Esta página ofrece el contexto público del protocolo para usar el rastreador Appello 5P con Plaspy. Explica cómo el dispositivo suele comunicarse con la plataforma, qué papel tiene el protocolo de reporte del rastreador en la integración y consideraciones prácticas para una configuración exitosa. El Appello 5P es un rastreador GPS compacto diseñado para seguimiento personal y de activos; incorpora un módulo GSM Simcom SIM800C, un receptor GNSS U‑Blox MAX‑7 y una batería recargable para uso prolongado en campo.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo empieza a reportar a la plataforma. El comportamiento exacto del protocolo y el tiempo de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página describe los aspectos públicos y no sensibles de la comunicación, al mismo tiempo que recomienda verificar con los recursos oficiales del fabricante.

## Descripción general del protocolo

El protocolo de reporte del rastreador es el mecanismo por el cual el Appello 5P envía información de ubicación, estado y alertas a un servidor remoto, y recibe respuestas de configuración o acuse cuando corresponde. A alto nivel, el protocolo permite la transferencia confiable de los datos que genera el rastreador para que Plaspy pueda mostrarlos, almacenarlos y actuar sobre ellos.

- Permite al dispositivo reportar posición, hora y estado de movimiento al endpoint de Plaspy.
- Transporta la identidad y el estado del equipo para que Plaspy asocie los mensajes con el rastreador correcto.
- Soporta reportes periódicos y mensajes por eventos, como geovallas o alertas de batería baja, según el firmware del equipo.
- Permite configuraciones o actualizaciones dirigidas por el servidor cuando el dispositivo y el firmware soportan configuración remota.
- Constituye la base para que Plaspy convierta mensajes crudos del rastreador en datos de ubicación y estado útiles para los usuarios.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un endpoint y puerto compartidos, y la plataforma detecta automáticamente el protocolo cuando un dispositivo correctamente configurado reporta. En la mayoría de los casos, usted no necesita seleccionar un protocolo dentro de Plaspy siempre que el rastreador esté apuntando a la dirección y puerto de servidor correctos.

- El endpoint público de Plaspy es d.plaspy.com y la IP pública es 54.85.159.138; el dispositivo puede reportar a cualquiera de los dos.
- Plaspy escucha en el puerto 8888 para reportes de dispositivos y usa el mismo puerto para todos los modelos soportados.
- La plataforma admite dispositivos que reportan vía UDP o TCP según la configuración del equipo.
- Cuando un dispositivo envía datos al endpoint de Plaspy, Plaspy identifica el protocolo y analiza automáticamente los tipos de mensaje compatibles.
- Si un dispositivo no es detectado, verificar la dirección de reporte, el protocolo de transporte y el comportamiento del firmware suele ser el primer paso.

## Contexto de transporte y conexión

El transporte de la conexión y la configuración del endpoint determinan cómo el Appello 5P se conecta a Plaspy. El dispositivo puede configurarse para usar UDP o TCP en el puerto común de Plaspy según su firmware y ajustes del usuario. Esta sección se centra en el contexto de la conexión más que en los detalles de los mensajes.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 según la preferencia del usuario o la configuración de la red.
- Plaspy usa el puerto 8888 para todas las conexiones de dispositivos, lo que simplifica la configuración entre modelos.
- El Appello 5P puede usar UDP o TCP en el puerto 8888 dependiendo del soporte del dispositivo y las opciones de configuración.
- Las condiciones de la red, el comportamiento del operador móvil y el módulo GSM del equipo pueden influir en si UDP o TCP resulta más confiable en un entorno concreto.
- Para la mayoría de las instalaciones, apuntar el rastreador al endpoint de Plaspy y asegurar la selección correcta del transporte es suficiente para la conectividad.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar los intervalos de reporte, los tipos de mensaje disponibles y la forma en que se manejan los comandos de configuración.
- Revisiones de hardware o lotes de producción distintos pueden incluir pequeñas diferencias de comportamiento que afectan el tiempo de los mensajes o la disponibilidad de funciones.
- El Appello 5P usa un módem GPRS 2G, por lo que la disponibilidad de red y el soporte del operador para 2G pueden afectar la conectividad y deben validarse por región.
- La capacidad de actualización remota en la nube puede cambiar el comportamiento del dispositivo tras una actualización; confirme el comportamiento del firmware actual después de cualquier upgrade.
- La elección del transporte (UDP vs TCP) puede alterar las características de entrega; seleccione el transporte que soporte el dispositivo y que se adapte a su red.
- Siempre valide la compatibilidad y los pasos exactos de configuración con la documentación oficial del fabricante para la unidad y el firmware específicos.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar una integración fluida, reportes fiables y una resolución de problemas más eficiente al usar el Appello 5P con Plaspy. Tener claridad sobre cómo se comunica el dispositivo reduce el tiempo de integración y mejora la fiabilidad operativa.

- Ayuda a verificar que el dispositivo está apuntando al endpoint de Plaspy y usa los ajustes de transporte correctos.
- Facilita la interpretación del comportamiento del equipo después de actualizaciones de firmware o cambios de configuración.
- Reduce el tiempo dedicado a resolver problemas de conectividad al centrar la revisión en la dirección del servidor, el transporte y las diferencias de firmware.
- Ayuda a planificar la vida útil de la batería y los intervalos de reporte según la frecuencia de transmisión del dispositivo.
- Favorece un despliegue a escala más seguro documentando el comportamiento esperado del equipo y las excepciones.

## Por qué usar Plaspy con este protocolo

Usar el Appello 5P con Plaspy ofrece a las organizaciones una visibilidad directa de activos y personas rastreadas gracias a la detección automática de protocolos y el enfoque de endpoint unificado de Plaspy. Al utilizar un único puerto de escucha y detectar automáticamente los protocolos de rastreadores soportados, los administradores se benefician de un onboarding de dispositivos simplificado y de una gestión centralizada sin importar las diferencias entre modelos.

Si desea saber más sobre cómo Plaspy funciona con el Appello 5P y otros rastreadores, visite https://www.plaspy.com. Para detalles específicos más recientes del protocolo del dispositivo, notas de firmware y orientación del fabricante, verifique la información actual en el sitio oficial de Appello en http://www.cnjeo.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que revisar la documentación del fabricante asegura que tenga detalles de implementación precisos y actualizados.
