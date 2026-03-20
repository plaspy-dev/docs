---
slug: /gpsmarker/m130/configuration
id: m130-configuration
sidebar_label: Configuration
title: GPSMarker - M130 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GPSMarker M130 para Plaspy, con ajustes de servidor y flujo de instalación
keywords:
  - configuración GPSMarker M130
  - instalación GPSMarker M130
  - configuración rastreador GPS
  - configuración Plaspy
  - configuración seguimiento vehicular
  - configuración servidor M130
  - GPSMarker M130 Plaspy
  - guía configuración rastreador
  - plataforma seguimiento M130
  - configuración GPSMarker
---

# GPSMarker - Configuración del M130

Esta página explica el contexto público de configuración para usar el rastreador GPSMarker M130 con Plaspy. Aquí encontrará los ajustes de servidor compartidos que Plaspy espera y orientación práctica para preparar el M130 a fin de reportar ubicación y eventos a la plataforma. El enfoque está en las opciones de configuración públicas y en el flujo de trabajo recomendado para integrar el equipo con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El M130 se describe como un equipo sin cuota de suscripción por el dispositivo, con uso de SMS saliente y GPRS para conectividad, receptor GPS GLONASS de 99 canales, opciones de larga duración de batería y sensores para movimiento, detección de choque, pánico, temperatura y control de relé. Use esta página como una lista de verificación práctica y consulte la documentación oficial del fabricante para los comandos específicos del modelo.

## Resumen de la configuración

Configurar el M130 para Plaspy prepara el equipo para enviar informes de posición y mensajes de estado a Plaspy, de modo que los activos sean visibles en la plataforma. El objetivo es asegurar conectividad GPRS o SMS confiable, apuntar el dispositivo al endpoint de Plaspy y verificar el reporte exitoso para que el M130 aparezca y actualice correctamente en Plaspy.

- Apuntar el M130 al endpoint del servidor Plaspy para que la telemetría llegue a la plataforma.
- Configurar el modo de transporte si el equipo requiere seleccionar UDP o TCP.
- Verificar que la SIM funcione y tenga datos o capacidad de SMS y saldo suficiente para mensajes salientes.
- Validar que el dispositivo informe a Plaspy y aparezca en la plataforma tras la configuración.
- Probar notificaciones por movimiento o alarmas para confirmar el manejo de eventos en el rastreador y en Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes del servidor Plaspy al configurar el M130. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos

## Requisitos típicos antes de la configuración

- Un GPSMarker M130 con alimentación y acceso a su método de configuración o software del fabricante
- Una tarjeta SIM activa con capacidad de datos o SMS y una tarifa adecuada para monitoreo en línea
- Acceso a la interfaz de instalación o a la lista de comandos SMS proporcionada por el fabricante
- Batería cargada o fuente de alimentación confiable si el equipo está instalado en un vehículo o activo
- Cobertura de red para GPRS para que el rastreador pueda enviar paquetes al servidor Plaspy
- Un método para reiniciar o reiniciar el dispositivo después de aplicar ajustes, si es requerido

## Cómo se conecta este rastreador a Plaspy

El M130 se configura para reportar su ubicación y mensajes de evento a Plaspy dirigiendo su telemetría saliente al endpoint y puerto compartidos de Plaspy. Plaspy recibe los paquetes del dispositivo en el puerto 8888 y detecta automáticamente el protocolo del rastreador para decodificar mensajes y mostrar el equipo en la plataforma.

- El rastreador envía actualizaciones periódicas de ubicación a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede seleccionarse como UDP o TCP, según la opción de configuración del dispositivo
- Mensajes de evento como movimiento, choque, pánico o batería baja se transmiten a Plaspy para su procesamiento
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita indicar manualmente qué protocolo usa el M130
- Tras una transmisión exitosa, el dispositivo se vuelve visible en Plaspy y reporta datos de estado y posición

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de GPSMarker o al software que el fabricante proporciona para el M130.
2. Localice los ajustes de servidor u host e ingrese d.plaspy.com o 54.85.159.138 como servidor destino.
3. Configure el puerto del servidor en 8888, tal como lo requiere Plaspy.
4. Elija UDP o TCP si el M130 exige seleccionar el transporte en su configuración.
5. Aplique o guarde los cambios de configuración en la interfaz del equipo o mediante los comandos provistos por el fabricante.
6. Reinicie o haga un ciclo de energía del equipo si el dispositivo necesita un reinicio para activar los nuevos ajustes de red.
7. Verifique que el dispositivo informe a Plaspy y aparezca en la plataforma con las actualizaciones de posición y eventos esperadas.

## Comandos de configuración de ejemplo

Los comandos exactos de configuración y el método para enviarlos dependen de la herramienta del fabricante, la versión de firmware y las variantes regionales del M130. Los dispositivos GPSMarker suelen ofrecer configuración mediante una utilidad de software o cadenas de comandos SMS; dado que los comandos varían, consulte la documentación oficial de GPSMarker o el manual del equipo para la sintaxis precisa.

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que las acciones públicas principales son introducir d.plaspy.com o 54.85.159.138 y configurar el puerto 8888 con el transporte deseado UDP o TCP. Verifique el conjunto de comandos específico con el soporte de GPSMarker o el manual del dispositivo antes de aplicar los comandos.

## Notas de configuración

- Las versiones de firmware y las variantes regionales del modelo pueden cambiar la sintaxis de comandos y las opciones disponibles; siempre consulte el manual del M130 correspondiente a su firmware.
- Si el M130 admite configuración por SMS y por GPRS, utilice la herramienta recomendada por el fabricante para configuraciones masivas y reserve el SMS para cambios de campo o recuperación.
- La elección entre UDP y TCP puede afectar el comportamiento de entrega en distintas condiciones de red; pruebe ambos si el dispositivo y la red lo permiten.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que sólo necesita asegurarse de que servidor, IP, puerto y transporte estén correctamente configurados en el equipo.
- Buenas prácticas de instalación, como reiniciar tras la configuración y verificar conectividad con un informe de prueba, mejoran la fiabilidad.

## Por qué usar Plaspy con esta configuración

Usar el GPSMarker M130 con Plaspy ofrece un camino sencillo hacia la visibilidad en la plataforma y el control operativo. Al configurar el dispositivo para enviar datos al endpoint y puerto compartidos de Plaspy, las organizaciones obtienen actualizaciones oportunas de posición, reportes de eventos y alertas de sensores a través de la plataforma, manteniendo simple la configuración del lado del equipo.

Para saber más sobre Plaspy visite https://www.plaspy.com y confirme los métodos de configuración específicos del dispositivo y el comportamiento del firmware en el sitio del fabricante https://gpsmarker.ru/. Las especificaciones del fabricante, las herramientas de configuración y el comportamiento del equipo pueden cambiar con el tiempo, por lo que es importante confirmar las instrucciones actuales con la documentación de GPSMarker.
