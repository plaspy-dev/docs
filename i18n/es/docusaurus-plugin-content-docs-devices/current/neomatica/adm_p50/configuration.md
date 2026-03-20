---
slug: /neomatica/adm_p50/configuration
id: adm_p50-configuration
sidebar_label: Configuration
title: Neomatica - ADM P50 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar Neomatica ADM P50 para Plaspy con ajustes de servidor prácticos y guía de instalación para rastreo personal y de activos
keywords:
- Configuración Neomatica ADM P50
- Configuración ADM P50
- Configuración servidor ADM P50
- Configuración Plaspy ADM P50
- Configuración rastreador Neomatica GPS
- Configuración software seguimiento ADM P50
- Configuración dispositivo Plaspy
- Configuración plataforma GPS ADM P50
- Configuración rastreador personal Neomatica
- Rastreo de activos ADM P50
---

# Neomatica - Configuración del ADM P50

Esta página documenta el contexto público de configuración para usar el Neomatica ADM P50 con Plaspy. Se concentra en los ajustes prácticos del servidor y en los pasos típicos necesarios para apuntar el ADM P50 a Plaspy, validar la conectividad y habilitar el rastreo y el reporte de eventos en la plataforma. El contenido resume lo aplicable públicamente para la integración y complementa la documentación del producto Neomatica.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador una vez que el equipo se conecta con éxito. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que use esta página como guía práctica y consulte la documentación de Neomatica para detalles específicos del equipo.

## Resumen de configuración

El proceso de configuración prepara el dispositivo para reportar datos de ubicación y eventos a Plaspy y garantiza que esos mensajes lleguen de forma fiable para su visualización en el mapa, alertas e historial. Para un rastreador alimentado por batería como el ADM P50 esto también incluye ajustar el comportamiento de reporte para equilibrar visibilidad en tiempo real y autonomía de la batería.

- Apunte el dispositivo al endpoint del servidor Plaspy para que la telemetría llegue a la plataforma
- Seleccione el método de transporte que soporte el dispositivo y configure el puerto compartido de Plaspy
- Guarde y aplique los cambios de configuración usando las herramientas Neomatica o métodos soportados
- Reinicie o corte la alimentación si es necesario para que el dispositivo se conecte a Plaspy y se registre
- Verifique que el ADM P50 aparezca en Plaspy y que las ubicaciones, SOS y eventos de movimiento sean visibles

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de conexión a Plaspy al configurar el ADM P50 para enviar datos a Plaspy:

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on the device configuration option  
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

Configure su dispositivo para usar una de las opciones de transporte anteriores y el endpoint listado para que Plaspy pueda ingerir los mensajes de ubicación y eventos.

## Requisitos típicos antes de la configuración

- Un ADM P50 con carga suficiente para la configuración y las pruebas iniciales  
- Un perfil SIM funcional si el equipo usa GPRS celular para el reporte de datos  
- Acceso al método o software de configuración de Neomatica para el ADM P50, como herramientas USB Type C o la app de configuración provista por el proveedor  
- Conocimiento de la versión de firmware del equipo y de las notas de la versión del proveedor que afecten ajustes de servidor o formatos de mensaje  
- Acceso básico a la cuenta Plaspy o al área de administración de dispositivos para confirmar que la unidad aparece después de la configuración  
- Un plan para probar la conectividad al aire libre o donde haya recepción GNSS y cobertura celular disponible

## Cómo se conecta este rastreador a Plaspy

El ADM P50 se configura para enviar su telemetría de ubicación y eventos al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda presentar datos en tiempo real y el historial. Una vez que el rastreador está apuntado a Plaspy y autorizado en la red, Plaspy reconoce el protocolo entrante y asigna los mensajes al dispositivo correspondiente.

- El equipo reporta fixes GNSS y cargas periódicas de ruta a d.plaspy.com en el puerto 8888  
- Puntos de fallback LBS y otras fuentes de ubicación no GNSS se reenvían a Plaspy cuando GNSS no está disponible  
- Los estados de movimiento y las transiciones de sueño del acelerómetro se envían como eventos a Plaspy para monitoreo de estado  
- Eventos SOS y del botón de pánico se transmiten a Plaspy para activar alertas y notificaciones  
- Plaspy recibe los mensajes por UDP o TCP y detecta automáticamente el protocolo del rastreador para su ingestión

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de Neomatica para configurar el ADM P50 usando la conexión USB Type C provista o la herramienta del proveedor.  
2. Ingrese el endpoint del servidor Plaspy especificando d.plaspy.com o la IP 54.85.159.138 como host de destino.  
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.  
4. Elija UDP o TCP si el equipo requiere selección de transporte y guarde esa opción.  
5. Aplique o guarde la configuración en la herramienta Neomatica para que los ajustes queden escritos en el dispositivo.  
6. Reinicie el ADM P50 o corte su alimentación si se requiere para que los nuevos ajustes de servidor entren en efecto.  
7. Valide que el equipo reporte a Plaspy confirmando que la unidad aparece en la plataforma y que llegan los mensajes iniciales de ubicación o eventos.

## Ejemplos de comandos de configuración

No se incluyen comandos públicos del dispositivo en esta página. Los comandos exactos de configuración y el método para enviarlos varían según el firmware de Neomatica y la herramienta de configuración suministrada por el proveedor. Use la utilidad oficial de configuración de Neomatica o los comandos SMS o USB documentados en el manual del ADM P50 para establecer el host del servidor a d.plaspy.com o 54.85.159.138 y el puerto a 8888. Consulte la documentación de Neomatica para la sintaxis de comandos y ejemplos específicos de su versión de firmware.

## Notas de configuración

- Las variaciones de firmware y las revisiones de hardware pueden cambiar la sintaxis de comandos o los campos disponibles en los menús, así que siempre revise las notas de la versión del ADM P50 antes de aplicar pasos de configuración.  
- Si el equipo ofrece UDP y TCP, elija el transporte que mejor se ajuste a sus necesidades operativas y pruebe ambos en caso de duda; Plaspy soporta los dos.  
- Los modos optimizados para batería en el ADM P50 pueden reducir la frecuencia de reporte, lo que afecta la visibilidad en tiempo real en Plaspy; ajuste los intervalos de reporte según sea necesario.  
- Use la ruta de configuración por USB Type C o la herramienta oficial de Neomatica para una configuración más confiable y para aplicar actualizaciones de firmware.  
- Las configuraciones con SIM dual o SIM embebida requieren confirmar cuál SIM está activa para datos, de modo que el dispositivo pueda alcanzar el endpoint del servidor Plaspy.

## Por qué usar Plaspy con esta configuración

Apuntar el Neomatica ADM P50 a Plaspy ofrece una manera sencilla de incorporar rastreo portátil y alimentado por batería a sus flujos de monitoreo. Con Plaspy ingiriendo GNSS, fallback LBS, eventos del acelerómetro y alertas SOS del ADM P50, los equipos obtienen mayor visibilidad para seguridad personal, protección de activos y operaciones móviles sin introducir cambios complejos específicos por dispositivo.

Para obtener más información sobre Plaspy e integraciones de dispositivos compatibles visite https://www.plaspy.com. Dado que los métodos de configuración específicos del equipo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, verifique las instrucciones y el firmware más recientes del ADM P50 con el fabricante en https://neomatica.com/ antes de desplegar a escala.
