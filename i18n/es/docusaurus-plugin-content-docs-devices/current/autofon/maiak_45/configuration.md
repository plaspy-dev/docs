---
slug: /autofon/maiak_45/configuration
id: maiak_45-configuration
sidebar_label: Configuration
title: AutoFon - Маяк 4.5 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar AutoFon Маяк 4.5 con Plaspy, ajustes de servidor y flujo de instalación
keywords:
  - Configuración AutoFon Маяк 4.5
  - Guía de configuración AutoFon
  - Configuración Маяк 4.5 para Plaspy
  - Configuración del servidor Plaspy
  - Guía de instalación de rastreador GPS
  - Reporte por intervalo GPRS
  - Integración de rastreo por SMS
  - Configuración de rastreo de vehículos
  - Configuración de rastreo de activos
  - Integración con plataforma de rastreo
---

# AutoFon - Маяк 4.5 — Configuración

Esta página explica el contexto de configuración pública para usar el rastreador AutoFon Маяк 4.5 con Plaspy. Se enfoca en los ajustes de servidor prácticos y en el flujo típico necesario para dirigir el dispositivo a Plaspy, de modo que los reportes de posición, las alertas de movimiento y los mensajes de estado lleguen a la plataforma. La guía usa los ajustes públicos del servidor Plaspy y las capacidades descritas para el Маяк 4.5, como los paquetes GPRS por intervalo y los reportes por SMS.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan los paquetes. Los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use este documento como referencia práctica y verifique los controles específicos del dispositivo en la documentación oficial de AutoFon al realizar la instalación y puesta en servicio.

## Resumen de configuración

El objetivo de la configuración es preparar el Маяк 4.5 para que envíe sus paquetes GPRS por intervalo o reportes SMS a Plaspy, de modo que el dispositivo sea visible en el entorno de rastreo. En la mayoría de los desplegados deberá configurar la dirección y el puerto del servidor, confirmar el tipo de transporte si es necesario, y luego validar que Plaspy reciba datos de ubicación y eventos.

- Configure el dispositivo para reportar a d.plaspy.com o a la IP equivalente 54.85.159.138 en el puerto 8888
- Elija UDP o TCP como transporte en el dispositivo si el firmware exige seleccionar el tipo de transporte
- Asegure el APN y la conectividad de la SIM para que el Маяк 4.5 pueda enviar paquetes GPRS por intervalo a Plaspy
- Valide que Plaspy detecte automáticamente el protocolo del dispositivo una vez que lleguen los primeros paquetes
- Confirme que los mensajes de movimiento, desconexión de alimentación y latidos aparezcan en Plaspy como se espera

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP (ambos soportados)
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a enviar paquetes
- Todos los dispositivos en Plaspy usan el mismo puerto para las conexiones de servidor

## Requisitos típicos antes de la instalación

- Un AutoFon Маяк 4.5 con alimentación, batería cargada o alimentación externa conectada
- Una tarjeta SIM activa con plan de datos y los ajustes APN correctos para la entrega de paquetes GPRS
- Acceso al método de configuración oficial de AutoFon o al software correspondiente a su firmware y revisión de hardware
- Conocimiento del PIN del dispositivo y de los números autorizados si usa configuración por SMS o control remoto
- Una cuenta en Plaspy y la posibilidad de vincular el dispositivo a su proyecto o flota en Plaspy después de que empiece a reportar

## Cómo se conecta este rastreador a Plaspy

El Маяк 4.5 puede transmitir coordenadas GPS y datos de estado mediante paquetes GPRS por intervalo o por mensajes SMS a números autorizados. Para la integración con Plaspy, el dispositivo se configura para enviar sus paquetes GPRS en modo intervalo directamente al endpoint y puerto compartidos de Plaspy, de modo que la plataforma reciba y decodifique automáticamente el protocolo del dispositivo.

- Los paquetes GPRS por intervalo se envían a d.plaspy.com o 54.85.159.138 usando el puerto 8888
- El dispositivo puede usar UDP o TCP si el firmware permite seleccionar el transporte
- Los eventos de detección de movimiento y las desconexiones de alimentación externa se reportan y se convierten en alertas en Plaspy
- SMS puede utilizarse para solicitudes de ubicación inmediatas o comandos remotos cuando GPRS no está disponible
- Plaspy convierte los paquetes entrantes en marcadores en el mapa en tiempo real, rutas históricas y notificaciones de eventos

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de AutoFon o al software para el Маяк 4.5 según el manual del dispositivo o la herramienta del instalador
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo
3. Configure el puerto de destino a 8888 para los reportes GPRS
4. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP según la preferencia de su sitio
5. Aplique o guarde los cambios de configuración en el dispositivo o mediante la herramienta del fabricante
6. Reinicie el dispositivo si el firmware lo exige para activar los nuevos ajustes de servidor
7. Valide que el dispositivo esté reportando a Plaspy comprobando los mensajes iniciales de latido o posición en su proyecto de Plaspy

## Ejemplos de comandos de configuración

El conjunto exacto de comandos y la sintaxis para configurar el Маяк 4.5 dependen de la herramienta del fabricante, la versión del firmware y de si configura mediante comandos SMS o una utilidad de PC. Los dispositivos AutoFon comúnmente soportan comandos SMS para la configuración de servidor y APN, así como configuración a través del software del proveedor. Debido a que los comandos específicos del modelo varían según el firmware, siga el manual de AutoFon para obtener la sintaxis precisa de SMS o de comandos por serial/USB. En general, los comandos que deberá proporcionar establecerán el servidor en d.plaspy.com o 54.85.159.138 y fijarán el puerto de destino en 8888; también pueden incluir un marcador de APN.

Marcadores comunes que puede encontrar:
- [apn] para el nombre del APN del operador móvil
- [apnu] para el usuario del APN si es requerido
- [apnp] para la contraseña del APN si es requerida

Si prefiere la configuración por SMS, consulte el manual del dispositivo para conocer el formato exacto de los comandos SMS y preserve los marcadores exactamente al reemplazarlos por los valores de su operador. Si utiliza la herramienta de PC del proveedor, ingrese d.plaspy.com o 54.85.159.138 y el puerto 8888 en los campos de configuración del servidor y guarde.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis exacta de los comandos SMS o la ubicación de los campos de configuración del servidor en el software del proveedor
- Elija UDP o TCP según sus necesidades de red y fiabilidad; Plaspy aceptará cualquiera de los dos y detectará el protocolo automáticamente
- Verifique los ajustes APN y que la SIM tenga datos GPRS habilitados antes de intentar enviar paquetes por intervalo a Plaspy
- El control por SMS es útil como recurso alterno para consultas inmediatas o cuando GPRS no está disponible; asegúrese de configurar números autorizados y PINs
- Mantenga siempre una copia de la configuración por defecto y documente cualquier cambio para el mantenimiento futuro

## Por qué usar Plaspy con esta configuración

Utilizar el AutoFon Маяк 4.5 con Plaspy ofrece una forma de bajo mantenimiento para supervisar activos, vehículos o pertenencias personales donde la larga duración de batería y la instalación discreta son prioridades. El modo de intervalo GPRS del dispositivo y el soporte de comandos por SMS facilitan la integración en Plaspy para alertas de eventos, reportes históricos y actualizaciones de posición ocasionales sin necesidad de transmisión continua de alta frecuencia.

Para obtener más información sobre Plaspy y cómo gestiona las integraciones de dispositivos, visite https://www.plaspy.com. Para los comandos específicos más recientes del dispositivo, notas de firmware y orientación del fabricante para el Маяк 4.5, verifique los detalles en el sitio oficial de AutoFon https://www.autofon.ru/ ya que las especificaciones del fabricante y los procedimientos de configuración pueden cambiar con el tiempo.
