---
slug: /xexun/u01/protocol
id: u01-protocol
sidebar_label: Protocol
title: Xexun - U01 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del reloj U01 UWB de Xexun y cómo transmite posicionamiento y telemetría a Plaspy para rastreo interior
keywords:
  - Protocolo Xexun U01
  - Protocolo GPS Xexun U01
  - Comunicación Xexun U01
  - Protocolo de rastreo Xexun U01
  - Posicionamiento U01 UWB
  - Dispositivo compatible con Plaspy
  - Protocolo de rastreador Plaspy
  - Reloj de posicionamiento para interiores
  - Seguimiento de telemetría vital
  - Rastreo de personal empresarial
---

# Xexun - Protocolo U01

Esta página resume el contexto público del protocolo para utilizar el reloj de posicionamiento UWB Xexun U01 con la plataforma Plaspy. Describe, en términos generales y no sensibles, cómo el dispositivo transmite datos de posicionamiento y telemetría a Plaspy y qué papel desempeña el protocolo de comunicación en una integración exitosa.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta de forma automática el protocolo del rastreador cuando el dispositivo está configurado para reportar al endpoint de Plaspy. El comportamiento preciso del protocolo y la telemetría disponible pueden variar según la versión de firmware del U01, la revisión de hardware y la implementación del fabricante, por lo que esta página se enfoca en conceptos generales de comunicación orientados al público en lugar de detalles internos del firmware.

## Resumen del protocolo

El U01 es una etiqueta en formato reloj de pulsera que utiliza UWB para proporcionar datos de localización interior de alta precisión, además de telemetría fisiológica y eventos. En despliegues típicos, el U01 transmite hacia anclas UWB y un motor de posicionamiento; Plaspy ingiere los resultados de posición y la telemetría para seguimiento en tiempo real, alertas e informes.

- El protocolo define cómo el dispositivo entrega fijaciones de posición y telemetría de sensores a un endpoint central para su procesamiento.
- Permite que el rastreador se identifique e incluya el estado del dispositivo, como batería y banderas de eventos, junto con datos de ubicación y salud.
- Los mensajes del protocolo permiten a Plaspy mapear coordenadas derivadas de UWB y telemetría a cuentas de usuario, geocercas y reglas de alarma.
- El canal de comunicación admite reportes basados en eventos como alarmas SOS, avisos de batería baja y actualizaciones de movimiento o actividad.
- Al entregar marcas de tiempo consistentes e identificadores de dispositivo, el protocolo posibilita la reproducción histórica y el análisis.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint de red compartido y determina automáticamente qué protocolo soportado está utilizando un dispositivo. Cuando un U01 u otro dispositivo compatible apunta al endpoint y puerto de Plaspy, normalmente no es necesaria la selección manual de protocolo dentro de la plataforma.

- Plaspy utiliza el dominio público de servidor d.plaspy.com como endpoint principal para el reporte de dispositivos.
- La IP del servidor Plaspy 54.85.159.138 también está disponible para dispositivos que requieran una dirección numérica.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador sin cambios por dispositivo de puerto.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según sus capacidades y preferencias de despliegue.
- Cuando un U01 está configurado correctamente para reportar al endpoint de Plaspy, Plaspy ingerirá las salidas posicionales y la telemetría para su procesamiento y visualización.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el U01 alcanza Plaspy más que el formato interno de los tramas del protocolo. La elección entre UDP y TCP y la forma en que los dispositivos apuntan a Plaspy son consideraciones típicas a nivel de transporte durante la puesta en marcha.

- El U01 puede configurarse para enviar datos usando UDP o TCP en el puerto 8888 dependiendo del soporte del dispositivo y los requisitos del sitio.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección numérica 54.85.159.138 según lo requiera el despliegue.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración de firewall y red.
- La selección del transporte puede afectar las garantías de entrega y se elige en función de la confiabilidad de la red o las necesidades de latencia.
- Asegúrese de que las rutas de red y las reglas de firewall permitan tráfico saliente hacia el endpoint de Plaspy en el puerto 8888 para un reporte fiable.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware del U01 pueden cambiar los campos de telemetría disponibles y el comportamiento de eventos; siempre revise las notas de la versión del dispositivo.
- Revisiones de hardware u módulos opcionales como RFID o NFC pueden afectar qué telemetría y eventos suministra el dispositivo a Plaspy.
- Las opciones de configuración del fabricante pueden permitir seleccionar el transporte UDP o TCP y configurar el endpoint de reporte y el intervalo.
- El comportamiento de integración depende del motor de posicionamiento externo y de las anclas que convierten las transmisiones UWB en coordenadas que Plaspy ingiere.
- Verifique que las actualizaciones OTA o firmware personalizados no cambien los endpoints de reporte ni el tiempo de los mensajes requeridos por Plaspy.
- En caso de duda, valide la compatibilidad usando dispositivos de prueba y revise la documentación del fabricante para el build de firmware exacto en uso.

## Por qué es importante entender el protocolo

Conocer los aspectos públicos del protocolo de comunicación del U01 ayuda a los equipos a planificar despliegues, solucionar problemas de conectividad y mantener un rastreo confiable a lo largo del tiempo. Un entendimiento claro del transporte y las expectativas de reporte reduce el tiempo de integración y mejora el tiempo de actividad operativo.

- Configure correctamente el dispositivo para apuntar a d.plaspy.com o a 54.85.159.138 y use el puerto 8888 para asegurar que los datos lleguen a Plaspy.
- Entender si el dispositivo usa UDP o TCP ayuda a ajustar políticas de red y a establecer expectativas sobre la entrega de mensajes.
- Conocer los elementos de telemetría disponibles facilita la configuración de paneles y el mapeo de alertas en Plaspy.
- Reconocer que cambios de firmware y hardware afectan el comportamiento reduce sorpresas tras actualizaciones.
- La familiaridad con el protocolo acelera el diagnóstico de reportes perdidos, alertas de batería o notificaciones de eventos.

## Por qué usar Plaspy con este protocolo

Usar el Xexun U01 con Plaspy ofrece una solución práctica para organizaciones que requieren posicionamiento interior de alta precisión junto con telemetría fisiológica y reporte de eventos. Plaspy ingiere las salidas posicionales de las anclas UWB además de las señales vitales y el estado del U01 para ofrecer visibilidad centralizada, alertas y análisis histórico, útiles para seguridad y flujos operativos.

Si desea saber más sobre cómo Plaspy puede integrar dispositivos U01 en su despliegue, visite https://www.plaspy.com para explorar las capacidades de la plataforma y las guías de implementación. Para obtener los detalles más actuales específicos del dispositivo, notas de firmware e información sobre revisiones de hardware, confirme con el fabricante en https://www.xexun.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
