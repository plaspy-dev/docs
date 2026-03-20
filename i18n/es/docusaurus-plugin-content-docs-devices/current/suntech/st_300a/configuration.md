---
slug: /suntech/st_300a/configuration
id: st_300a-configuration
sidebar_label: Configuration
title: Suntech - ST 300A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Suntech ST 300A en Plaspy con ajustes de servidor comandos SMS y pasos prácticos
keywords:
  - Configuración Suntech ST 300A
  - Instalación Suntech ST300A
  - ST 300A configuración Plaspy
  - Configuración rastreador GPS Suntech
  - Configuración servidor ST300A
  - Configuración plataforma GPS Suntech
  - Configuración seguimiento vehículo
  - Instalación rastreador gestión de flotas
  - Comandos SMS ST 300A
  - Configuración APN rastreador GPS
---

# Suntech - ST 300A Configuración

Esta página documenta el contexto público de configuración para usar el tracker Suntech ST 300A con Plaspy. Describe los ajustes de servidor prácticos, ejemplos de comandos SMS disponibles públicamente según el fabricante y los pasos habituales para registrar el dispositivo en Plaspy, de modo que el rastreador pueda reportar ubicaciones y eventos a la plataforma.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Las acciones exactas en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ST 300A permite la configuración por SMS como muestran los comandos públicos más abajo e incluye características como antenas internas, sensor de temperatura y soporte i-Button, RS232 y múltiples entradas analógicas que los instaladores suelen utilizar al integrar el equipo con una plataforma telemétrica.

## Visión general de la configuración

El proceso de configuración prepara el ST 300A para comunicarse de forma fiable con Plaspy, asegurando que el dispositivo informe posición y estado al endpoint del servidor de Plaspy en el puerto compartido. Los comandos públicos del fabricante muestran cómo calcular el identificador del dispositivo a partir del IMEI y cómo establecer el APN y los valores de servidor mediante SMS.

- Configure el dispositivo para que informe al endpoint del servidor de Plaspy y así las posiciones y eventos lleguen a la plataforma.
- Establezca el APN del operador y las credenciales opcionales para que el rastreador use datos móviles para reporte por GPRS.
- Aplique la IP o dominio del servidor y el puerto correctos para que Plaspy acepte conexiones entrantes del rastreador.
- Verifique que el dispositivo sea visible en Plaspy tras la configuración y que la telemetría se actualice con el intervalo esperado.
- Use el ID de dispositivo derivado del IMEI cuando envíe comandos SMS para que el rastreador acepte los cambios de configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP — el dispositivo puede configurarse para usar cualquiera de los dos en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto para simplificar la configuración del rastreador

## Requisitos típicos antes de la instalación

- Una SIM activa con datos móviles habilitados y la información APN correcta del operador
- El número IMEI del dispositivo disponible para calcular el ID que se usará en los comandos SMS
- Acceso al método de configuración del fabricante, como comandos SMS o la herramienta del proveedor
- Fuente de alimentación y un arnés instalado correctamente para que el rastreador arranque y se registre en la red móvil
- Conocimientos básicos de los valores APN y cualquier usuario o contraseña que requiera el operador móvil
- Paciencia para probar la conectividad y verificar los reportes del dispositivo después de aplicar los ajustes

## Cómo se conecta este rastreador a Plaspy

El ST 300A se configura para enviar sus mensajes de ubicación y estado al endpoint y puerto compartido del servidor Plaspy. Una vez que el rastreador tenga conectividad móvil válida y se hayan aplicado los ajustes de servidor/APN, Plaspy detectará automáticamente el protocolo del dispositivo y comenzará a procesar los datos.

- El rastreador reporta al dominio o IP del servidor Plaspy usando el puerto 8888.
- El transporte puede configurarse como UDP o TCP en el dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.
- La frecuencia de reporte se configura en el rastreador para que las actualizaciones lleguen en el intervalo deseado.
- Plaspy muestra la visibilidad del dispositivo y la telemetría entrante cuando el rastreador se conecta con éxito a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Use el ID de dispositivo derivado del IMEI al emitir comandos SMS de configuración para que el rastreador reconozca las instrucciones.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Suntech para el ST 300A, como la interfaz de comandos SMS o el software del proveedor recomendado por el instalador.
2. Calcule el ID de dispositivo a partir del IMEI (ver ejemplo abajo) y prepare los comandos SMS o los campos de la herramienta del proveedor.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor/host.
4. Establezca el puerto en 8888 (Plaspy usa el mismo puerto para todos los dispositivos) y seleccione UDP o TCP si el equipo solicita la elección del transporte.
5. Aplique o guarde la configuración en el dispositivo y envíe los comandos SMS requeridos desde el número autorizado.
6. Reinicie el dispositivo si el fabricante lo indica o si el equipo no se conecta inmediatamente.
7. Valide que el rastreador esté reportando a Plaspy y sea visible en la plataforma, confirmando los intervalos de actualización y los eventos esperados.

## Ejemplos de comandos de configuración

El Suntech ST 300A soporta configuración vía SMS. Los ejemplos públicos que siguen están adaptados del contenido del fabricante y usan un marcador de posición para deviceId calculado. Calcule deviceId como los nueve dígitos extraídos del IMEI eliminando los primeros cinco dígitos y excluyendo el dígito final. Por ejemplo, si el IMEI es 123456789012345, el deviceId sería 678901234.

Importantes marcadores de posición
- {{deviceId}} — el identificador de 9 dígitos del dispositivo extraído del IMEI como se describió arriba
- {{apn}} — el nombre del APN del operador
- {{apnu}} — el usuario APN si el operador lo exige
- {{apnp}} — la contraseña APN si el operador la exige

1. (Paso inicial opcional) Restaurar configuración de fábrica
```text
ST300CMD;{{deviceId}};02;Reset
```
Etiquete este paso de restauración como opcional y úselo solo si necesita devolver el dispositivo a los valores de fábrica antes de reconfigurarlo.

2. Establecer el APN del operador y el servidor GPRS incluyendo la IP y puerto de Plaspy
```text
ST300NTW;{{deviceId}};02;1;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```
- El cuarto campo (aquí mostrado como 1) puede indicar el uso de credenciales APN cuando se requieren; incluya 0 o 1 según la sintaxis de comandos del dispositivo.
- Reemplace {{apn}}, {{apnu}} y {{apnp}} con los valores del operador móvil. Si su operador no requiere usuario o contraseña, deje {{apnu}} y {{apnp}} vacíos tal como admite el formato del comando.
- Puede sustituir d.plaspy.com por la IP si lo prefiere y si el dispositivo lo soporta, pero el ejemplo del fabricante usa la IP 54.85.159.138 y el puerto 8888.

3. Establecer intervalo de actualización/reportes a 60 segundos
```text
ST300RPT;{{deviceId}};02;60;60;60;3;0;0;0;0;0
```
- Estos parámetros configuran los intervalos de reporte periódicos y el comportamiento relacionado. Mantenga el orden y los valores según lo requiera la referencia de comandos del dispositivo.

4. Verificar la configuración actual
```text
ST300CMD;{{deviceId}};02;PresetA
```
- Use este comando para solicitar una comprobación de configuración al dispositivo.

Preserve el orden de los comandos cuando siga la guía del fabricante. Envíe los comandos SMS desde el número de teléfono autorizado especificado por la política de configuración del dispositivo y espere los mensajes de confirmación del rastreador.

## Notas de configuración

- La configuración por SMS está soportada en este modelo; use la sintaxis de comando y el orden de campos precisos que indica el fabricante.
- Las revisiones de firmware y hardware pueden cambiar el soporte de comandos y el significado de los parámetros; consulte la documentación oficial de Suntech para la revisión de su dispositivo.
- Elija UDP o TCP según las necesidades de la instalación; Plaspy acepta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- Confirme el cálculo de deviceId a partir del IMEI antes de enviar comandos para evitar dirigir erróneamente las instrucciones.
- Cuando sea posible, pruebe la configuración en un entorno controlado para validar el acceso al APN y la conectividad con el servidor antes del despliegue completo.

## Por qué usar Plaspy con esta configuración

Utilizar Plaspy con el Suntech ST 300A ofrece una forma directa de centralizar la visibilidad de vehículos y activos, correlacionar eventos y gestionar la frecuencia de reportes en una flota. Las entradas flexibles y el soporte de sensores del ST 300A lo hacen práctico para numerosos escenarios de monitoreo, y aplicar los ajustes de servidor compartidos de Plaspy asegura que el dispositivo entregue telemetría a la plataforma.

Para obtener más información sobre Plaspy y la guía de configuración de dispositivos soportados visite https://www.plaspy.com. Verifique siempre los métodos de configuración específicos del dispositivo y el comportamiento del firmware más reciente en el sitio oficial de Suntech en http://www.suntechint.com/ ya que las especificaciones y los flujos de configuración del fabricante pueden cambiar con el tiempo.
