---
slug: /neomatica/adm333/protocol
id: adm333-protocol
sidebar_label: Protocol
title: Neomatica - ADM333 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el Neomatica ADM333 con Plaspy en seguimiento GPS y telemetría
keywords:
  - Protocolo Neomatica ADM333
  - protocolo GPS ADM333
  - compatibilidad ADM333 Plaspy
  - protocolo rastreador GPS Neomatica
  - protocolo de comunicación ADM333
  - protocolo de seguimiento ADM333
  - integración de dispositivos Plaspy
  - guía de protocolo de rastreadores GPS
  - seguimiento de vehículos ADM333
  - integración de telemetría ADM333
---

# Neomatica - Protocolo ADM333

Esta página ofrece un panorama público del protocolo para utilizar el rastreador Neomatica ADM333 con la plataforma Plaspy. Describe cómo el protocolo de reporte del dispositivo transmite datos GNSS, telemetría, sensores y eventos a Plaspy, y se basa en funciones públicas del equipo como soporte de protocolo abierto, enlace GPRS, sensores BLE e interfaces periféricas relevantes para la integración y planificación del despliegue.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para enviar datos al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, revisiones de hardware e implementaciones del fabricante, por lo que esta página se centra en contextos públicos de conexión y en orientación práctica de compatibilidad en lugar de formatos de paquete internos o propietarios.

## Resumen del protocolo

El ADM333 utiliza un protocolo de reporte abierto sobre enlace GPRS para enviar posiciones GNSS, telemetría y datos de sensores periféricos a servidores telemáticos de terceros y plataformas como Plaspy. En términos de integración, el protocolo define cómo el rastreador se identifica, comunica la ubicación y eventos, y transmite lecturas de sensores para que una plataforma pueda interpretar y presentar información útil.

- Permite reportes de posición GNSS y telemetría como estado de ignición, eventos del acelerómetro y lecturas de sensores BLE.
- Transporta alertas basadas en eventos, incluyendo alarmas por movimiento y detección de interferencia, para monitoreo en tiempo real.
- Provee un identificador y campos de telemetría para que Plaspy asocie los datos entrantes con el dispositivo y el objeto de flota correctos.
- Soporta almacenamiento en búfer de rutas durante periodos de conectividad intermitente para que los datos históricos se suban cuando vuelva la cobertura.
- Permite configuración remota y actualizaciones de firmware mediante los canales de transporte y configuración que el dispositivo soporte.

## Cómo detecta Plaspy el protocolo

Plaspy recibe telemetría de los dispositivos en un endpoint compartido y determina automáticamente el protocolo de rastreador adecuado cuando el dispositivo reporta a ese endpoint. En la mayoría de las implementaciones, el propietario del dispositivo no necesita seleccionar un protocolo específico en Plaspy si el rastreador está configurado para enviar datos al servidor de Plaspy.

- Configure el ADM333 para enviar datos al dominio del servidor Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 usando el puerto compartido 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y realiza la detección automática del protocolo cuando llega tráfico al endpoint.
- Cuando un ADM333 correctamente configurado reporta, Plaspy asocia el flujo entrante con un registro de dispositivo y presenta ubicación y telemetría sin necesidad de seleccionar el protocolo manualmente.
- Si el dispositivo se enruta a través de un servidor telemático intermedio, asegúrese de que ese servidor reenvíe los datos del ADM333 a Plaspy usando el endpoint y puerto compartidos.
- Usted puede confiar en la detección de Plaspy para integraciones estándar de protocolo abierto, manteniendo el firmware y la configuración del dispositivo sincronizados con las recomendaciones del fabricante.

## Transporte y contexto de conexión

Las elecciones de conexión y transporte determinan cómo el ADM333 se comunica con Plaspy. El rastreador puede usar su enlace celular GPRS para enviar telemetría y admite opciones de transporte comunes que influyen en la confiabilidad y en el comportamiento de red.

- El ADM333 puede configurarse para usar UDP o TCP dirigido al puerto 8888 en el endpoint de Plaspy, según el soporte del dispositivo y la preferencia de configuración.
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138 si lo requieren reglas de red o herramientas de aprovisionamiento.
- Plaspy escucha en el puerto 8888 para todo el tráfico de dispositivos, lo que simplifica la configuración de servidores para flotas con equipos mixtos.
- La selección del transporte (UDP vs TCP) puede afectar las garantías de entrega y el consumo de energía; elija el modo que se ajuste a sus prioridades operativas y a las opciones de firmware del dispositivo.
- La doble SIM y la conectividad GPRS en el ADM333 ofrecen redundancia para el enlace ascendente, pero no cambian los requisitos de endpoint o puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar campos disponibles, frecuencia de telemetría o comportamiento de transporte. Verifique la versión de firmware del ADM333 al validar compatibilidad.
- Revisiones de hardware o variantes del modelo pueden exponer conjuntos periféricos distintos, como soporte BLE o RS‑485; confirme qué interfaces están presentes en su unidad.
- Las herramientas de configuración del fabricante y los comandos SMS pueden ser necesarios para apuntar el rastreador a d.plaspy.com o a 54.85.159.138 y para seleccionar UDP o TCP en el puerto 8888.
- Las diferencias de transporte entre UDP y TCP pueden afectar el manejo de pérdida de paquetes y el uso de batería; elija lo que mejor se adapte a su red y configuración de dispositivo.
- Al integrar a través de servidores intermedios, asegúrese de que el intermedio preserve los campos requeridos y reenvíe la telemetría cruda al endpoint de Plaspy para la detección automática.
- Siempre contraste las expectativas de funciones como sondeo de sensores BLE, comportamiento de almacenamiento en búfer de rutas y umbrales de eventos con la documentación del fabricante y las notas de versión.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del ADM333 en términos generales facilita un despliegue fluido en Plaspy, agiliza la resolución de problemas y asegura un funcionamiento confiable a largo plazo. Saber cómo reporta el dispositivo y qué campos esperar hace más sencillo mapear la telemetría a los flujos de trabajo de flota y mantener una calidad de datos consistente.

- La configuración correcta del servidor y del transporte garantiza que los dispositivos lleguen a Plaspy en d.plaspy.com o 54.85.159.138 usando el puerto 8888, de modo que se pueda realizar la detección automática.
- Estar al tanto de las diferencias de firmware y hardware reduce sorpresas en la integración y ayuda a priorizar actualizaciones de firmware o cambios de configuración.
- Entender qué telemetría está disponible desde BLE, entradas analógicas, RS‑485 y eventos del acelerómetro ayuda a diseñar reglas de monitoreo y alertas en Plaspy.
- Conocer el comportamiento de buffering y reconexión facilita la validación de las cargas históricas de ruta después de interrupciones de conectividad.
- Tener expectativas claras sobre el comportamiento del transporte (UDP vs TCP) contribuye a optimizar la vida útil de la batería, la confiabilidad y el uso de la red.

## Por qué usar Plaspy con este protocolo

Usar el ADM333 con Plaspy ofrece a las organizaciones acceso a telemetría consolidada de vehículos y activos, alertas de eventos y rutas históricas dentro de una plataforma única. El protocolo abierto del ADM333, su enlace GPRS, los sensores BLE y las interfaces periféricas encajan bien con casos de uso comunes de gestión de flotas y activos como monitoreo de rutas, telemetría de combustible, flujos de trabajo anti robo y sensado ambiental.

Para obtener más información sobre Plaspy y cómo maneja las integraciones de dispositivos, visite https://www.plaspy.com. Para detalles específicos más recientes sobre el protocolo del dispositivo, notas de firmware y la guía del fabricante, consulte el sitio oficial de Neomatica en https://neomatica.com/ ya que el soporte de protocolo y el comportamiento del dispositivo pueden evolucionar con el tiempo y deben verificarse con el fabricante.
