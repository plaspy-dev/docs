---
slug: /riti/690s_idu_403/configuration
id: 690s_idu_403-configuration
sidebar_label: Configuration
title: Riti - 690s (IDU-403) Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Riti 690s (IDU-403) a Plaspy con ajustes de servidor y flujo de configuración
keywords:
  - configuración Riti 690s
  - instalación Riti 690s
  - Riti 690s en Plaspy
  - configuración de servidor Riti 690s
  - configuración rastreador GPS Riti 690s
  - seguimiento vehicular Riti 690s
  - configuración de rastreadores Plaspy
  - integración GPS Plaspy
  - configuración rastreadores de flota
  - configuración registrador de datos GNSS
---

# Riti - 690s (IDU-403) Configuración

Esta página describe el contexto público de configuración para usar el Riti Locator 690s (IDU-403) con Plaspy. Se centra en los ajustes prácticos del servidor y en el flujo de trabajo necesario para apuntar el rastreador a Plaspy, de modo que el equipo pueda enviar posiciones, telemetría y eventos a la plataforma. El contenido usa los valores públicos del servidor de Plaspy y prácticas generales de integración del fabricante sin reemplazar la documentación oficial de Riti.

Plaspy emplea ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. Los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y las herramientas del proveedor que use para configurar el dispositivo. Use la guía a continuación para preparar el 690s para la integración con Plaspy y confirme los ajustes con la documentación oficial de Riti cuando sea necesario.

## Resumen de la configuración

Preparar el 690s para integrarlo con Plaspy implica configurar el dispositivo para que reporte al endpoint compartido de Plaspy y validar que la telemetría y los eventos lleguen correctamente a la plataforma. El objetivo es asegurar que el rastreador transmita de forma fiable posiciones GNSS, eventos del sensor G, telemetría de odómetro y voltaje, y cualquier registro almacenado localmente.

- Apunte el rastreador al endpoint del servidor de Plaspy para habilitar el rastreo en tiempo real y el envío de eventos.
- Configure el transporte del dispositivo para usar UDP o TCP en el puerto de Plaspy para que la telemetría llegue a la plataforma.
- Valide la conectividad y las subidas de datos para garantizar que los registros almacenados localmente se transmitan cuando vuelva la conectividad.
- Confirme que Plaspy detecte automáticamente el protocolo del dispositivo después de que el rastreador comience a reportar.
- Verifique que el dispositivo sea visible en Plaspy y que envíe los tipos de telemetría esperados, como posiciones GNSS, eventos del sensor G y actualizaciones de odómetro.

## Ajustes del servidor Plaspy

Use los siguientes valores públicos de Plaspy al configurar el Riti 690s para reportes al backend.

- Dominio de servidor d.plaspy.com como host DNS principal para reportes
- IP de servidor 54.85.159.138 como endpoint alterno para equipos que requieran una IP
- Puerto 8888 que Plaspy usa para todos los dispositivos compatibles
- Transporte compatible UDP o TCP; configure el rastreador con cualquiera de los dos si requiere selección
- Plaspy detecta automáticamente el protocolo del rastreador después de que el dispositivo se conecte al endpoint compartido

## Requisitos típicos antes de la configuración

- Una unidad Riti 690s alimentada y funcional con el cableado de vehículo o activo completado según corresponda
- Una SIM celular activa y plan de datos compatible con el dispositivo si usa transporte celular
- Acceso a las herramientas oficiales de configuración de Riti o a la lista de comandos SMS para el 690s proporcionada por el proveedor
- Conocimiento de la versión de firmware del dispositivo y de las notas de la versión del fabricante que afecten la configuración
- Un plan para la ubicación e instalación física del dispositivo que garantice buena recepción GNSS y cobertura celular
- Acceso administrativo a cualquier software de configuración o canal SMS usado para cambiar los ajustes del servidor

## Cómo se conecta este rastreador a Plaspy

El Locator 690s se configura para enviar su ubicación y telemetría al endpoint compartido de servidor y puerto de Plaspy. Una vez que el dispositivo esté apuntando al endpoint de Plaspy y se haya seleccionado el transporte, Plaspy ingerirá los datos y asignará el protocolo correcto para su análisis y presentación.

- El rastreador transmite posiciones GNSS y datos asistidos por A‑GPS al endpoint de Plaspy para el mapeo en vivo.
- Telemetría como actualizaciones por segundo del odómetro y voltaje de batería se envía a Plaspy para informes y alertas.
- Eventos del sensor G y señales SOS o de falla se transmiten a Plaspy y se registran como eventos.
- Los registros almacenados localmente se suben al servidor de Plaspy cuando regresa la conectividad, evitando pérdida de datos.
- El dispositivo reporta por UDP o TCP al puerto compartido de Plaspy para que la detección y el parseo en backend ocurran automáticamente.

## Flujo de configuración común

1. Acceda al método o software oficial de configuración de Riti para el 690s, por ejemplo la herramienta de gestión de dispositivos de Riti o los comandos SMS documentados.
2. Ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor o reporting APN del dispositivo.
3. Configure el puerto del dispositivo a 8888, el puerto que Plaspy utiliza para todos los rastreadores soportados.
4. Elija UDP o TCP si el equipo requiere seleccionar el transporte y guarde la opción.
5. Aplique o guarde los cambios de configuración en la herramienta del fabricante o mediante el canal de configuración del dispositivo.
6. Reinicie o haga un ciclo de alimentación del rastreador si el método de configuración lo requiere para aplicar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy revisando los registros de conexión iniciales y confirmando que el equipo aparece en Plaspy con la telemetría y los eventos esperados.

## Ejemplos de comandos de configuración

El Riti 690s puede ser configurado mediante las herramientas del proveedor, una utilidad de configuración web o de escritorio, o por comandos SMS del operador según el firmware y las herramientas que Riti suministre. Dado que los comandos de configuración y la sintaxis exacta varían según el firmware y el conjunto de herramientas, no se incluyen comandos concretos aquí. Al realizar la configuración:

- Use la utilidad de configuración de Riti o el conjunto oficial de comandos SMS de Riti para cambiar el host del servidor a d.plaspy.com o 54.85.159.138 y establezca el puerto a 8888.
- Si su herramienta de instalación requiere marcadores de posición para credenciales APN, reemplace marcadores como {{apn}}, {{apnu}} o {{apnp}} con los datos de su proveedor de SIM según lo documentado por Riti o su operador.

Siga siempre la referencia de comandos o la guía de configuración suministrada por Riti para la sintaxis precisa y el orden correcto de las operaciones.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la interfaz de configuración exacta, los nombres de comandos SMS o las opciones de transporte disponibles; verifique la versión de firmware antes de aplicar las instrucciones.
- Elija TCP o UDP según la guía de la herramienta Riti o el comportamiento de la red; ambos transportes son compatibles con Plaspy en el puerto 8888.
- Confirme que el comportamiento de almacenamiento local esté habilitado para que los registros guardados se suban a Plaspy cuando se restablezca la conectividad.
- Las prácticas de los instaladores y las variaciones de mercado pueden modificar las funciones disponibles o los ajustes por defecto; siempre valide contra la documentación oficial de Riti.
- Plaspy usa el mismo puerto en los dispositivos soportados, por lo que la configuración del puerto es consistente cuando se integran varios modelos de rastreadores.

## Por qué usar Plaspy con esta configuración

Usar el Riti 690s con Plaspy ofrece una combinación práctica para el monitoreo de flotas y activos donde la grabación GNSS compacta, los datos de odómetro por segundo y la notificación de eventos del sensor G son importantes. Apuntar el dispositivo al endpoint compartido de Plaspy permite visibilidad centralizada, alertas y reproducción de rutas para que los equipos operativos puedan supervisar ubicaciones, eventos de conducción y el estado del vehículo desde una sola plataforma.

Para saber más sobre Plaspy y las integraciones soportadas visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento de firmware y detalles del fabricante verifique la información actual en el sitio oficial de Riti https://www.riti.com.tw/ ya que las especificaciones y procesos de configuración del proveedor pueden cambiar con el tiempo.
