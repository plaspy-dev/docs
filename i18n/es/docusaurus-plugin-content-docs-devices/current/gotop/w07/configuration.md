---
slug: /gotop/w07/configuration
id: w07-configuration
sidebar_label: Configuration
title: GOTOP - W07 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GOTOP W07 y conectarlo a Plaspy, con ajustes de servidor transporte y flujo de instalación
keywords:
  - configuración GOTOP W07
  - instalación GOTOP W07
  - GOTOP W07 Plaspy
  - configuración rastreador GOTOP
  - configuración rastreador GPS W07
  - configuración servidor W07
  - configuración dispositivo Plaspy
  - configuración rastreador Plaspy
  - guía configuración rastreador GPS
  - resolución problemas GOTOP W07
---

# GOTOP - W07 Configuración

Esta página describe el contexto público de configuración para usar el GOTOP W07 con Plaspy. Resume los ajustes de servidor prácticos, las verificaciones necesarias y un flujo de trabajo típico para que el W07 envíe datos de ubicación y eventos a la plataforma Plaspy para seguimiento en tiempo real y reproducción de rutas. El W07 admite reportes por SMS y GPRS y es compacto y resistente al agua, por lo que resulta apropiado para despliegues de seguimiento portátiles y discretos que alimentan datos a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use la información aquí para preparar el W07 para la integración con Plaspy y consulte la documentación del fabricante para los detalles del firmware y las utilidades de configuración.

## Resumen de la configuración

Configurar el GOTOP W07 para su uso con Plaspy consiste principalmente en dirigir sus reportes SMS o GPRS al endpoint del servidor de Plaspy y verificar que los mensajes lleguen y sean interpretados correctamente. El objetivo es asegurar telemetría fiable, alarmas y el historial de rutas en Plaspy sin modificar comportamientos del dispositivo que no estén relacionados.

- Apunte los ajustes de reporte del rastreador al endpoint y puerto del servidor de Plaspy para que los datos se enruten a su cuenta Plaspy.
- Confirme que el dispositivo tenga una SIM operativa, servicio de datos o SMS activo y el APN correcto del operador móvil.
- Valide la selección de transporte (UDP o TCP) si el dispositivo lo requiere, y use la configuración de puertos de Plaspy.
- Aplique y guarde los ajustes en el rastreador, luego confirme que el dispositivo aparece y reporta correctamente en Plaspy.
- Monitoree la telemetría inicial y los mensajes de alarma para garantizar que las notificaciones de geocerca, movimiento y energía se transmiten.

## Ajustes del servidor de Plaspy

Use los ajustes públicos del servidor de Plaspy a continuación al configurar el endpoint de reporte del dispositivo. Plaspy requiere estos valores para los datos entrantes y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- Note that all devices in Plaspy use the same port so you should configure port 8888 regardless of the device model

## Requisitos habituales antes de la configuración

- Dispositivo cargado o con alimentación y acceso físico al W07 para configuración y pruebas.
- Tarjeta SIM activa con datos o SMS habilitados y el APN correcto del proveedor de la red móvil.
- Acceso al método o software oficial de configuración GOTOP utilizado para cambiar los ajustes de red/servidor.
- Una cuenta o entorno Plaspy donde el dispositivo será registrado y monitoreado.
- Confirmación de la versión de firmware del dispositivo y la documentación del proveedor en caso de que la sintaxis de comandos o ajustes difiera.
- Herramientas básicas para pruebas, como un segundo teléfono para pruebas por SMS o una laptop para configuración por serial/USB si está soportado.

## Cómo se conecta este rastreador a Plaspy

El W07 envía pings periódicos de ubicación, alarmas y mensajes de estado por GSM/GPRS o SMS. Cuando se configura con el endpoint y el puerto del servidor de Plaspy, esos mensajes son recibidos por Plaspy y convertidos en posiciones en vivo, alertas e historiales de ruta para monitoreo e informes.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- El transporte puede configurarse en UDP o TCP en el dispositivo si la herramienta de configuración exige elegir.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el servidor parseará los formatos de mensaje compatibles una vez establecida la conectividad.
- Los mensajes entrantes se convierten en posiciones en vivo, alertas de geocerca y movimiento, y en el historial de rutas dentro del panel de Plaspy.
- Use Plaspy para validar que alarmas como movimiento, apagado y batería baja aparezcan como se espera.

## Flujo de trabajo típico de configuración

Siga estos pasos públicos y prácticos al preparar un W07 para Plaspy. Los menús exactos o la sintaxis de comandos dependen de las herramientas GOTOP y del firmware.

1. Acceda al método o software oficial de configuración GOTOP (comandos SMS, app del proveedor o herramienta de configuración) documentado por el fabricante.
2. Inserte una SIM funcional y verifique que la SIM tenga servicio de datos o SMS y el APN correcto si es necesario.
3. Ingrese la dirección del servidor configurando d.plaspy.com o la IP 54.85.159.138 en los ajustes de reporte del dispositivo.
4. Establezca el puerto en 8888. Recuerde que todos los dispositivos en Plaspy usan el mismo puerto.
5. Elija UDP o TCP en el dispositivo si la interfaz de configuración solicita seleccionar transporte.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si la herramienta o el firmware requieren un reinicio.
7. Valide que el dispositivo reporte a Plaspy comprobando actualizaciones de posición en vivo, alertas o un mensaje de verificación en su cuenta Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración y los pasos varían entre versiones de firmware y herramientas del proveedor para el GOTOP W07. Dado que la sintaxis específica por modelo la proporciona GOTOP, los comandos SMS o de la herramienta para establecer servidor, puerto, transporte y APN no se incluyen aquí. Consulte la documentación del fabricante o la guía de configuración para las cadenas de comando precisas.

Si su herramienta de instalación usa comandos SMS o una utilidad web/USB, realice la configuración de servidor y puerto tal como lo describe la guía del fabricante, usando d.plaspy.com o 54.85.159.138 y el puerto 8888, y seleccione UDP o TCP si se le solicita.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar el menú de configuración, los comandos disponibles o el orden requerido de las operaciones; siempre verifique con la documentación del GOTOP W07 correspondiente a su revisión de firmware.
- Algunas implementaciones requieren configurar el APN antes de que funcione el reporte por GPRS. Asegúrese de que el APN y cualquier usuario o contraseña asociados coincidan con los parámetros del proveedor de la SIM.
- Elegir TCP en lugar de UDP puede afectar las garantías de entrega; si el rastreador admite ambos, pruebe la opción de transporte que funcione mejor para su red y la configuración de Plaspy.
- SMS puede usarse como método de respaldo o verificación para ciertos mensajes; consulte la guía de comandos GOTOP para las comprobaciones basadas en SMS.
- Confirme siempre que Plaspy muestre el latido inicial o un reporte de posición después de la configuración para verificar la conectividad de extremo a extremo.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP W07 con Plaspy ofrece un camino sencillo hacia visibilidad en tiempo real y telemetría básica para activos pequeños, seguridad personal o seguimiento de vehículos compactos. Al dirigir los reportes SMS o GPRS del W07 al endpoint y puerto compartidos de Plaspy, las organizaciones obtienen acceso a posiciones en vivo, notificaciones de alarma y reproducción histórica de rutas en una sola plataforma de monitoreo.

Para obtener más información sobre Plaspy y cómo ingiere la telemetría de dispositivos visite https://www.plaspy.com. Para métodos de configuración específicos por dispositivo, notas de firmware e instrucciones del fabricante verifique los detalles en el sitio de GOTOP https://www.gotop.cc/ ya que el comportamiento del dispositivo y los métodos de instalación pueden cambiar con las actualizaciones de firmware y las revisiones de hardware.
