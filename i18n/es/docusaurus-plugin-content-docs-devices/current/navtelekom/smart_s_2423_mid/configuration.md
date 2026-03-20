---
slug: /navtelekom/smart_s_2423_mid/configuration
id: smart_s_2423_mid-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2423 MID+ Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Navtelekom SMART S-2423 MID+ y ajustes de servidor para Plaspy
keywords:
  - Configuración Navtelekom SMART S-2423 MID+
  - Configuración SMART S-2423 MID+ para Plaspy
  - Configuración de rastreador GPS Navtelekom
  - Configuración de servidor SMART S-2423 MID+
  - Configuración de dispositivo Plaspy
  - Configuración de seguimiento de flotas Navtelekom
  - Integración de rastreador GPS con Plaspy
  - Configuración de seguimiento de vehículos SMART S-2423
  - Guía de configuración del rastreador Navtelekom
  - Integración con la plataforma Plaspy
---

# Navtelekom - SMART S-2423 MID+ — Configuración

Esta página ofrece el contexto público de configuración para utilizar el Navtelekom SMART S-2423 MID+ con Plaspy. Se centra en la información práctica necesaria para apuntar el equipo hacia Plaspy y que el rastreador reporte posición y telemetría a la plataforma. El contenido está pensado para instaladores e integradores que preparan dispositivos para el alta en Plaspy.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos precisos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración que provea el fabricante. Use esta guía junto con la documentación de Navtelekom y la utilidad NTC Configurator al preparar dispositivos para la integración con Plaspy.

## Resumen de configuración

El proceso de configuración prepara el SMART S-2423 MID+ para comunicarse con Plaspy, verifica que el dispositivo alcance el servidor de Plaspy y permite que el equipo aparezca en la plataforma para monitoreo e informes. Use la herramienta de configuración del fabricante para establecer parámetros de red y puntos finales de servidor, y luego confirme que el dispositivo es visible en Plaspy.

- Apunte el rastreador al dominio o IP del servidor Plaspy para que los paquetes de posición y telemetría lleguen a la plataforma.
- Seleccione el método de transporte que soporte el dispositivo (UDP o TCP) y configure el puerto de Plaspy.
- Asegúrese de que la conectividad celular y cualquier ajuste de APN o SIM estén configurados para la transmisión de datos.
- Guarde y aplique la configuración usando el NTC Configurator o el método de configuración que Navtelekom provea.
- Verifique que el dispositivo se registre y envíe datos para que aparezca en los paneles y reportes de Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Requisitos previos comunes

- Acceso a la utilidad NTC Configurator o al método oficial de configuración de Navtelekom para el SMART S-2423 MID+.
- Un equipo alimentado y probado funcionalmente con una tarjeta SIM activa y servicio de datos si se requiere reporte celular.
- Conocimiento del IMEI del dispositivo o identificador único para localizarlo en Plaspy después del registro.
- Firmware reciente proporcionado por el fabricante o firmware confirmado como compatible para tareas de integración.
- Un banco de pruebas o entorno en vehículo para validar la obtención de señal GNSS y la comunicación con el servidor.
- Credenciales o permisos necesarios en sus herramientas de integración para modificar ajustes del dispositivo.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el SMART S-2423 MID+ envía informes de posición y la telemetría asociada al punto final del servidor de Plaspy para que los operadores de flota puedan monitorear activos en tiempo real. El rastreador utiliza el punto final y puerto compartidos de Plaspy y depende del transporte configurado para entregar los paquetes a la plataforma.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138.
- Todos los dispositivos usan el puerto 8888 para enviar datos a Plaspy.
- Puede seleccionar UDP o TCP en el dispositivo si la configuración requiere elegir explícitamente el transporte.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario mapear protocolos manualmente en la plataforma.
- Una vez recibidos los paquetes, Plaspy procesa posición y telemetría para visualización, alertas e informes.

## Flujo típico de configuración

1. Abra la herramienta oficial de configuración de Navtelekom, como el NTC Configurator, o el método recomendado por el fabricante para el SMART S-2423 MID+.
2. Localice la sección de ajustes de servidor o TCP/UDP en el perfil del dispositivo.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 como destino.
4. Establezca el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
5. Elija UDP o TCP si el dispositivo exige seleccionar un protocolo de transporte.
6. Aplique o guarde la configuración y escriba los ajustes en el dispositivo.
7. Reinicie el equipo si la herramienta de configuración o el firmware requieren reboot para que los cambios tengan efecto.
8. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma confirmando la llegada de datos y las actualizaciones de posición en vivo.

## Ejemplos de comandos de configuración

El SMART S-2423 MID+ suele configurarse con las herramientas oficiales de Navtelekom y el conjunto exacto de comandos puede variar según el firmware y la herramienta. Dado que los comandos de configuración del fabricante difieren entre versiones, utilice la utilidad NTC Configurator o el manual del usuario del dispositivo para la sintaxis precisa. Si prefiere métodos por línea de comandos o SMS documentados por Navtelekom, consulte la guía oficial de configuración para los comandos exactos que establecen servidor, puerto y transporte.

## Notas de configuración

- Las diferencias de firmware pueden cambiar nombres de menús y flujos de configuración en el NTC Configurator; confirme la versión de firmware antes de seguir una secuencia de pasos específica.
- Elija UDP para menor sobrecarga o TCP para entrega garantizada si el dispositivo requiere una elección explícita de transporte; Plaspy acepta ambos en el puerto 8888.
- Si el dispositivo requiere ajustes de APN celular, configure los valores de APN según el proveedor de la SIM y verifique la conectividad de datos antes de apuntar al servidor Plaspy.
- Use el IMEI o identificador del dispositivo para confirmar que la unidad correcta es visible en Plaspy tras la configuración y el reporte inicial.
- Cuando sea posible, realice una prueba en banco que incluya verificación de fix GNSS y una breve prueba de manejo para confirmar el comportamiento de reporte en condiciones reales.

## Por qué usar Plaspy con esta configuración

Usar el SMART S-2423 MID+ con Plaspy ofrece a operadores de flota y telemática una forma clara de centralizar ubicación, sensores y telemetría de comportamiento del conductor en una sola plataforma. Al reportar al endpoint y puerto compartidos de Plaspy, los integradores reducen la complejidad de configurar un servidor por dispositivo y pueden confiar en la detección automática de protocolos de Plaspy para procesar los datos entrantes.

Para obtener más información sobre Plaspy y cómo soporta integraciones de dispositivos visite https://www.plaspy.com. Para los métodos de configuración específicos del dispositivo y detalles de firmware más actuales consulte la documentación del fabricante en https://www.navtelecom.ru/ ya que las revisiones de hardware y los procedimientos de instalación pueden cambiar con el tiempo.
