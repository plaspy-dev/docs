---
slug: /careu/ut1/configuration
id: ut1-configuration
sidebar_label: Configuration
title: CAREU - UT1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador CAREU UT1 en Plaspy con ajustes de servidor compartido y pasos prácticos de instalación
keywords:
  - Configuración CAREU UT1
  - Instalación CAREU UT1
  - CAREU UT1 Plaspy
  - Configuración rastreador CAREU
  - Instalación rastreador GPS UT1
  - Configuración servidor UT1
  - Configurar rastreo flota UT1
  - Configuración dispositivo Plaspy
  - Instalación rastreador Plaspy
  - Integración rastreador GPS Plaspy
---

# CAREU - UT1 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GPS CAREU UT1 con la plataforma Plaspy. Resume los ajustes de servidor prácticos, los requisitos previos y los pasos habituales que usted o un instalador seguirán para apuntar un dispositivo UT1 a Plaspy y así permitir el seguimiento en tiempo real y la ingestión de telemetría.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración en el lado del fabricante para el UT1 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta del proveedor empleada, por lo que esta guía se centra en los valores públicos de Plaspy y en el flujo de trabajo práctico, recomendando verificar siempre con la documentación del fabricante.

## Resumen de configuración

Configurar un CAREU UT1 para Plaspy implica preparar el dispositivo, configurar su punto de reporte de red hacia el servidor de Plaspy y validar que las posiciones y la telemetría lleguen correctamente a la plataforma. El objetivo es transmitir de forma fiable ubicación, alarmas y datos de sensores a Plaspy, manteniendo la autonomía del dispositivo y la capacidad de gestión remota.

- Ingrese los ajustes del servidor de Plaspy en el UT1 usando la herramienta de configuración del fabricante o mediante los métodos SMS/FTP compatibles.
- Seleccione el protocolo de transporte requerido por el firmware del dispositivo y configure el puerto compartido de Plaspy.
- Verifique la conectividad celular y la configuración del APN para que el UT1 pueda alcanzar el endpoint de Plaspy sobre LTE con las opciones de fallback necesarias.
- Aplique y guarde los cambios de configuración, y confirme que el rastreador aparece y envía datos en Plaspy.
- Use los paneles y alertas de Plaspy para validar telemetría, eventos de geocerca, alarmas de batería y manipulación, además de las funciones de comandos remotos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta

## Requisitos previos típicos

- Un dispositivo CAREU UT1 con alimentación y batería cargada o alimentación externa conectada.
- SIM activa y servicio de datos celulares apropiado para el UT1 LTE Cat 1 y las redes regionales.
- Acceso al método oficial de configuración de CAREU o al software del fabricante, como herramienta web del fabricante, utilidad de escritorio o conjunto de comandos SMS.
- APN y ajustes del operador verificados para que el UT1 pueda establecer sesiones de datos para FTP, SMS o conexiones socket.
- Una cuenta en Plaspy o acceso administrativo para validar la llegada del dispositivo y la telemetría una vez aplicada la configuración.
- Conocimiento básico de la versión de firmware del dispositivo y de cualquier limitación específica del proveedor.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el CAREU UT1 envía posiciones, alarmas y telemetría de sensores al endpoint compartido de Plaspy para que los gestores de flota y los equipos de seguridad puedan ver actualizaciones en vivo y registros históricos. El UT1 usa la conectividad celular para establecer una sesión por socket o datagrama con el servidor de Plaspy y transmite eventos y cargas de ubicación según su protocolo de firmware, que Plaspy detectará automáticamente.

- El UT1 apunta a d.plaspy.com o a 54.85.159.138 y envía datos al puerto 8888.
- El transporte puede ser UDP o TCP según el firmware del UT1 y la elección de configuración.
- Plaspy detecta automáticamente el protocolo del dispositivo y comienza a parsear la telemetría entrante.
- Ubicación, eventos del acelerómetro, alarmas de geocerca, notificaciones de alimentación y manipulación, y datos de sensores se muestran en los paneles de Plaspy.
- La configuración remota y las acciones FOTA suelen gestionarse a través del sistema del fabricante y pueden usar FTP o herramientas de la plataforma del proveedor para administrar el firmware.

## Flujo común de configuración

1. Acceda al método oficial de configuración de CAREU o al software proporcionado por el fabricante.
2. En los ajustes de servidor o reporte del dispositivo ingrese el endpoint de Plaspy como d.plaspy.com o 54.85.159.138.
3. Configure el puerto de reporte del dispositivo en 8888, teniendo en cuenta que Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
5. Guarde o aplique la configuración en la herramienta del dispositivo y confirme que los ajustes se hayan escrito.
6. Reinicie el dispositivo si las instrucciones del fabricante requieren un reinicio para activar los nuevos ajustes de reporte.
7. Valide que el dispositivo reporte a Plaspy comprobando la plataforma Plaspy en busca de telemetría entrante y confirmando los eventos esperados.

## Ejemplos de comandos de configuración

El UT1 admite múltiples métodos de configuración según el firmware y las herramientas del proveedor. Los comandos exactos varían por la versión de firmware y la utilidad de configuración de CAREU. Si su implementación utiliza comandos SMS o de estilo CLI proporcionados por CAREU, siga las referencias oficiales de comandos del fabricante. En general, suministrará el dominio o la IP del servidor Plaspy y el puerto compartido 8888 usando la herramienta o el conjunto de comandos que su dispositivo soporte.

Si necesita ejemplos de comandos por SMS o consola, consulte el manual de usuario del CAREU UT1 o los recursos de soporte del fabricante para obtener la sintaxis correcta según su versión de firmware. Plaspy espera que los dispositivos apunten a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando UDP o TCP.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres exactos de los parámetros de configuración y los transportes disponibles. Confirme los nombres de parámetros en el manual del CAREU UT1 para su revisión de firmware.
- TCP y UDP se comportan de forma distinta en redes con pérdida de paquetes. Pruebe ambos transportes si la primera opción no produce subidas consistentes; Plaspy soporta y detecta ambos.
- Todos los dispositivos de Plaspy comparten el puerto 8888, por lo que usar el dominio d.plaspy.com o la IP 54.85.159.138 con el puerto 8888 es suficiente en la mayoría de las instalaciones.
- Verifique el APN y la configuración del plan de datos de la SIM antes de intentar conectar; las fallas de sesión celular son una causa frecuente de que los datos no lleguen a Plaspy.
- La configuración remota y el FOTA para el UT1 suelen gestionarse vía FTP o el backend del fabricante. Coordine los pasos de FOTA con los equipos de operaciones para evitar interrupciones de servicio involuntarias.

## Por qué usar Plaspy con esta configuración

Usar el CAREU UT1 con Plaspy ofrece una solución práctica y robusta para organizaciones que necesitan visibilidad continua y telemetría accionable en flotas y activos pesados. El hardware y las capacidades de registro del UT1, junto con la ingestión de Plaspy, brindan a los equipos un seguimiento confiable, alertas de eventos y análisis histórico para soportar la prevención de robo, la planificación de mantenimiento y la supervisión operativa.

Para obtener más información sobre Plaspy y cómo se integra con dispositivos como el CAREU UT1 visite https://www.plaspy.com. Por favor verifique los métodos específicos de configuración del dispositivo, el comportamiento del firmware y los detalles del fabricante en el sitio oficial de CAREU https://www.systech-iot.com/ ya que la documentación del proveedor y las actualizaciones de firmware pueden afectar los pasos exactos de configuración.
