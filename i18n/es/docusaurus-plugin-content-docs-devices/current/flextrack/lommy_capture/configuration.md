---
slug: /flextrack/lommy_capture/configuration
id: lommy_capture-configuration
sidebar_label: Configuration
title: Flextrack - Lommy Capture Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el tracker Flextrack Lommy Capture y conectarlo a Plaspy con ajustes de servidor compartidos y buenas prácticas
keywords:
  - Configuración Flextrack Lommy Capture
  - Configuración Lommy Capture
  - Integración Lommy Capture Plaspy
  - Configuración de tracker Flextrack
  - Configuración de servidor Lommy Capture
  - Configuración GPS Plaspy
  - Guía de configuración de tracker para remolques
  - Software de rastreo Lommy Capture
  - Rastreo de flotas Lommy Capture
  - Conectividad Lommy Capture
---

# Flextrack - Configuración Lommy Capture

Esta página ofrece información pública sobre la configuración del tracker Flextrack Lommy Capture para su uso con Plaspy. Resume los ajustes de servidor compartidos que Plaspy requiere, explica los pasos prácticos que suelen seguir los técnicos o integradores, y señala los detalles del fabricante que son importantes para una integración exitosa. Use esta guía para preparar el dispositivo y confirmar la conectividad antes de registrar activos en Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del tracker para simplificar la incorporación. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor; por ello, siempre contraste con la documentación de Flextrack cuando necesite la sintaxis específica de comandos o opciones avanzadas.

## Resumen de la configuración

Esta configuración prepara el Lommy Capture para comunicarse de forma fiable con la plataforma Plaspy y habilita monitoreo en vivo, alertas y reproducción de rutas históricas. El objetivo es apuntar el dispositivo al endpoint de ingestión de Plaspy, asegurarse de que tenga conectividad celular y carga suficiente gracias a su sistema de recuperación de energía, y confirmar que los mensajes reportados llegan a Plaspy.

- Configure el dispositivo para que informe al endpoint de Plaspy (dominio o IP) y al puerto requerido.
- Verifique la selección de transporte (UDP o TCP) si el firmware del dispositivo exige una opción explícita.
- Confirme la conectividad celular, la configuración de la SIM y cualquier APN necesario según el entorno de instalación.
- Valide que el dispositivo envíe mensajes de posición, movimiento y alarma y que esos mensajes aparezcan en Plaspy.
- Revise el estado de carga y el cableado de la instalación para que el Lommy Capture pueda reportar en los intervalos esperados.

## Ajustes del servidor Plaspy

Use estos ajustes públicos del servidor Plaspy al configurar Lommy Capture para la ingestión en la nube. Estos valores son los detalles comunes de endpoint que Plaspy utiliza con los dispositivos compatibles.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: configure UDP o TCP en el puerto 8888 si su firmware Lommy Capture requiere seleccionar el transporte
- Plaspy detecta automáticamente el protocolo del tracker cuando los datos llegan al servidor y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la instalación

- Acceso físico a la unidad Lommy Capture y al cableado dentro de la carcasa de la luz para verificar una instalación correcta y protección contra el agua.
- Una SIM celular operativa con capacidad de voz/SMS o datos según lo exija el rol del dispositivo; confirme la cobertura de la red móvil en el sitio de instalación.
- Acceso al método oficial de configuración de Flextrack para Lommy Capture (herramienta del fabricante, portal web o conjunto de comandos SMS).
- Conocimiento de los ajustes APN u otros parámetros del operador requeridos por la SIM; tenga esas credenciales a mano si la herramienta del fabricante no los detecta automáticamente.
- Una cuenta o proyecto en Plaspy donde se registrará el dispositivo para validar los mensajes entrantes después de la configuración.
- Un plan para probar el estado de alimentación del dispositivo dado el diseño de recuperación de energía del Lommy Capture, de modo que pueda observar el comportamiento de reporte en condiciones normales y con desconexión.

## Cómo se conecta este tracker a Plaspy

Lommy Capture transmite mensajes de posición, movimiento y alarma y puede configurarse para enviar esos mensajes a Plaspy usando el endpoint y el puerto compartidos. Plaspy ingiere los payloads del dispositivo y mapea los eventos a activos para seguimiento en tiempo real, alertas por geocerca y análisis histórico.

- El dispositivo se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP en el puerto 8888 según el firmware; Plaspy acepta ambos y procesará los mensajes.
- Plaspy detecta automáticamente el protocolo del tracker cuando los mensajes llegan al servidor, lo que simplifica la configuración de protocolo en el lado del servidor.
- Los mensajes de movimiento y alarma generados por el G-sensor integrado se reenvían a Plaspy para alertas en tiempo real.
- Los datos históricos almacenados en la memoria interna del dispositivo se cargan a Plaspy cuando la conectividad lo permite, habilitando la reproducción de rutas y reportes de cumplimiento.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Flextrack para Lommy Capture (herramienta de PC del fabricante, interfaz web o conjunto de comandos SMS).
2. Introduzca la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de servidor/host del dispositivo.
3. Ajuste el puerto del servidor a 8888 como puerto de destino para los mensajes del tracker.
4. Elija el protocolo de transporte UDP o TCP si el dispositivo requiere una selección explícita; algunas versiones de firmware usan UDP por defecto.
5. Si aplica, verifique o ingrese el APN y los ajustes del operador de la SIM para que el dispositivo establezca conectividad celular.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante requieren un reinicio para activar los cambios.
7. Valide que el Lommy Capture esté reportando a Plaspy comprobando el estado del dispositivo y los mensajes recientes en su proyecto o panel de Plaspy.

## Ejemplos de comandos de configuración

Los comandos de configuración y la sintaxis exacta del Lommy Capture dependen de las herramientas Flextrack o del conjunto de comandos SMS que proporcione el fabricante. Dado que los formatos de comando varían según el firmware y la herramienta del proveedor, esta página no incluye cadenas de comandos específicas. Use la herramienta de Flextrack o los comandos SMS oficiales del manual de Lommy Capture para:

- Establecer el host del servidor a d.plaspy.com o 54.85.159.138
- Configurar el puerto a 8888
- Seleccionar el transporte UDP o TCP si es necesario
- Configurar los marcadores de APN o las credenciales del operador cuando sea necesario

Consulte la documentación oficial de Flextrack para ejemplos precisos de comandos y los marcadores que requiera el firmware del Lommy Capture.

## Notas de configuración

- Diferencias de firmware: los nombres de menú, las etiquetas de campo y la sintaxis de comandos pueden variar entre revisiones de firmware de Lommy Capture; siempre asegúrese de que la versión de firmware del dispositivo coincida con la guía de configuración correspondiente.
- Elección del transporte: UDP se utiliza comúnmente para reportes de posición livianos, pero TCP puede estar disponible para dispositivos que requieran entrega orientada a conexión; Plaspy acepta ambos en el puerto 8888.
- Fallback por SMS: Lommy Capture soporta reporte por SMS además de UDP; las rutas de integración SMS en Plaspy dependen de su gateway o configuración de ingestión y pueden requerir pasos adicionales.
- Comportamiento de recuperación de energía: debido a que el dispositivo depende de circuitos de iluminación para cargarse, pruebe el comportamiento de reporte tanto con las luces activas como con el remolque desconectado para comprender los intervalos de reporte en modo de reserva.
- Documentación del fabricante: siga las instrucciones de instalación y cableado de Flextrack para proteger las conexiones y evitar la entrada de humedad en las carcasas de las luces.

## Por qué usar Plaspy con esta configuración

Usar Lommy Capture con Plaspy proporciona a los gestores de flota visibilidad persistente de remolques y activos remolcados con un mantenimiento mínimo. La instalación discreta del dispositivo, su detección de movimiento y su diseño de recuperación de energía se complementan bien con las capacidades de Plaspy de posicionamiento en tiempo real, alertas y reproducción histórica de rutas, lo que facilita flujos de trabajo eficientes para prevención de robos y monitoreo operativo de flotas.

Para obtener más información sobre Plaspy y cómo ingiere datos telemáticos, visite https://www.plaspy.com. Para los detalles más recientes sobre la configuración específica del dispositivo, la sintaxis de comandos y las instrucciones de instalación del Lommy Capture, verifique la información actual en el sitio del fabricante https://flextrack.dk, ya que el firmware y los métodos de configuración pueden cambiar con el tiempo.
