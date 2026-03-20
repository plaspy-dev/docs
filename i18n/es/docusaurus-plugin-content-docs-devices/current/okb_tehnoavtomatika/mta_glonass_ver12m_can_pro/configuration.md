---
slug: /okb_tehnoavtomatika/mta_glonass_ver12m_can_pro/configuration
id: mta_glonass_ver12m_can_pro-configuration
sidebar_label: Configuration
title: OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN-PRO) Configuration
sidebar_class_name: menu_item_tracker
description: Configurar MTA-Glonass ver 12M CAN PRO para usar con Plaspy, con ajustes de servidor público y guía práctica
keywords:
  - Configuración OKB Tehnoavtomatika MTA-Glonass
  - Instalación MTA-Glonass Plaspy
  - Configuración de rastreador OKB Tehnoavtomatika
  - Configuración de rastreador Plaspy
  - Configuración de servidor MTA-Glonass
  - Configuración CAN rastreador de vehículo
  - Configuración rastreador GNSS
  - Configuración rastreador para gestión de flotas
  - Compatibilidad rastreador GPS Plaspy
  - Configuración telemetría MTA-Glonass
---

# OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN-PRO) Configuración

Esta página documenta el contexto de configuración pública para usar el rastreador OKB Tehnoavtomatika MTA-Glonass (ver.12M-CAN-PRO) con Plaspy. Se enfoca en los ajustes de servidor prácticos y el flujo de trabajo necesario para preparar el equipo y que envíe posición GNSS y telemetría al platforma Plaspy. Las indicaciones a continuación se basan en la integración pública de Plaspy y en las capacidades generales de la familia MTA-Glonass, como GPRS DATA, conmutación por SMS, telemetría CAN y entradas/salidas para sensores.

Plaspy utiliza ajustes de servidor compartidos a nivel de plataforma y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos de configuración por parte del fabricante y los nombres exactos de menús, comandos SMS o utilidades de configuración pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta página como referencia práctica para los ajustes públicos de Plaspy y verifique los detalles específicos del dispositivo con la documentación de OKB Tehnoavtomatika cuando sea necesario.

## Resumen de la configuración

El objetivo de esta configuración es apuntar el dispositivo MTA-Glonass hacia Plaspy y validar que el terminal pueda enviar ubicación y telemetría derivada de CAN a la plataforma. Los pasos se realizan habitualmente mediante la herramienta oficial de configuración de OKB Tehnoavtomatika, por comandos SMS o desde una interfaz de instalación en campo, según el firmware del equipo y las preferencias del instalador.

- Configure el dispositivo para que reporte al endpoint de Plaspy usando el puerto compartido de Plaspy.
- Seleccione el protocolo de transporte apropiado (UDP o TCP) si el equipo exige elegir transporte.
- Verifique la conectividad GPRS o DATA para que la posición y la telemetría CAN lleguen a Plaspy.
- Guarde y aplique los ajustes en el dispositivo y, si es necesario, reinícielo para comenzar el envío.
- Confirme que el dispositivo aparece en Plaspy y que la posición, los parámetros CAN y los eventos son visibles.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: UDP or TCP may be used on port 8888 depending on device settings  
- Plaspy automatically detects the tracker protocol when the device connects  
- Note that all devices in Plaspy use the same port so set port 8888 on the tracker

Nota: los valores técnicos (dominio, IP y puerto) deben introducirse exactamente como se muestran arriba en la configuración del dispositivo.

## Requisitos típicos antes de la configuración

- Acceso al método oficial de configuración de OKB Tehnoavtomatika o al software de instalador para este modelo.  
- Una unidad MTA-Glonass alimentada e instalada con el cableado requerido y las conexiones al bus CAN completadas.  
- Una tarjeta SIM activa con GPRS o canal DATA habilitado cuando se requiera telemetría celular.  
- Confirmación de la versión de firmware actual del equipo y de cualquier conjunto de comandos SMS o formatos de archivo de configuración específicos del proveedor.  
- Acceso local del instalador para guardar, aplicar y opcionalmente reiniciar el dispositivo tras los cambios.  
- Acceso a una cuenta o instancia de Plaspy para validar la visibilidad del dispositivo después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el MTA-Glonass envía fijaciones GNSS y telemetría del vehículo al endpoint y puerto compartidos de Plaspy. Plaspy ingiere el tráfico de uplink y mapea los mensajes del protocolo en actualizaciones de ubicación, registros de eventos y parámetros derivados del CAN para visualización e informes.

- El terminal reporta posición y telemetría a d.plaspy.com o 54.85.159.138 usando el puerto 8888.  
- El transporte puede ser UDP o TCP en el puerto 8888 según la configuración del dispositivo.  
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que no se requiere seleccionar el protocolo explícitamente en la plataforma.  
- Los datos de uplink suelen incluir fijaciones GNSS y telemetría CAN que Plaspy convierte en campos de datos del vehículo.  
- El almacenamiento en buffer de eventos en el equipo asegura que los registros guardados se reenvíen a Plaspy cuando se restablece la conectividad.

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración de OKB Tehnoavtomatika o al software correspondiente para el modelo MTA-Glonass.  
2. En los ajustes de red o servidor del dispositivo, introduzca la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138.  
3. Configure el puerto del servidor en 8888, que es el puerto compartido de Plaspy usado por todos los dispositivos soportados.  
4. Si el equipo requiere seleccionar el transporte, elija UDP o TCP según la preferencia del instalador y las condiciones de la red.  
5. Aplique o guarde los cambios de configuración en la herramienta del dispositivo o envíe el SMS de configuración si el equipo lo soporta.  
6. Reinicie o corte y restituya la alimentación del dispositivo si el fabricante lo recomienda para activar los nuevos ajustes.  
7. Valide que el equipo reporte a Plaspy comprobando su visibilidad, las actualizaciones de posición recientes y la telemetría en la plataforma Plaspy.

## Ejemplos de comandos de configuración

La sintaxis exacta de los comandos de configuración y de los SMS varía según el firmware y las herramientas del proveedor para dispositivos OKB Tehnoavtomatika. Dado que los comandos específicos del modelo los suministra el fabricante o aparecen en los manuales del equipo, no se reproducen aquí de forma detallada. Use la utilidad oficial de configuración de OKB Tehnoavtomatika o consulte el manual del dispositivo para ejemplos de comandos SMS o de configuración binaria.

Si dispone de comandos SMS proporcionados por el fabricante o de un archivo de configuración para este modelo, aplique los valores públicos del servidor Plaspy exactamente como se indican en la sección Ajustes del servidor Plaspy utilizando esa herramienta.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de menús y la sintaxis de los comandos SMS. Confirme siempre los comandos para la revisión de firmware instalada.  
- La elección entre UDP y TCP puede afectar el comportamiento de entrega y la retransmisión. Seleccione el transporte que mejor se adapte a la fiabilidad de su red y a la preferencia del instalador.  
- Dado que Plaspy usa un puerto compartido y detección automática de protocolo, la tarea principal es asegurarse de que el equipo apunte a d.plaspy.com o a 54.85.159.138 en el puerto 8888.  
- Si el MTA-Glonass se configura por SMS, confirme que el comando SMS incluya el dominio o la IP correctos y el parámetro de puerto en el orden exacto que requiere el equipo.  
- Verifique los mapeos del bus CAN y cualquier ID de parámetro requerido en la configuración de OKB Tehnoavtomatika para que Plaspy reciba los canales de telemetría esperados.

## Por qué usar Plaspy con esta configuración

Integrar el MTA-Glonass (ver.12M-CAN-PRO) con Plaspy ofrece un camino ágil para llevar posición GNSS y telemetría derivada del CAN a una plataforma única de gestión de flotas. La detección automática de protocolo y el enfoque de puerto compartido de Plaspy reducen la configuración por dispositivo en la plataforma, permitiendo que los instaladores se concentren en una configuración precisa del equipo y en la fiabilidad de la conectividad de red.

Para conocer más sobre Plaspy y las funcionalidades de la plataforma visite https://www.plaspy.com. Tenga en cuenta que las especificaciones del fabricante, los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo, por lo que debe verificar los detalles más recientes del dispositivo y los conjuntos de comandos con OKB Tehnoavtomatika en http://www.okb-ta.ru/
