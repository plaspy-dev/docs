---
slug: /castel/idd_213gl/configuration
id: idd_213gl-configuration
sidebar_label: Configuration
title: Castel - IDD-213GL Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Castel IDD 213GL y reportar datos a Plaspy por GPRS y SMS
keywords:
  - Configuración Castel IDD 213GL
  - Configuración rastreador Castel
  - IDD 213GL Plaspy
  - Configuración GPS Castel
  - Configuración rastreador OBD
  - Configuración seguimiento vehicular
  - Configuración servidor Plaspy
  - Configuración servidor rastreador GPS
  - Rastreador para gestión de flotas
  - Rastreador OBD II GPS
---

# Castel - IDD-213GL Configuración

Esta página describe el contexto público de configuración para usar el Castel IDD-213GL con Plaspy. Explica los ajustes de servidor compartidos, los pasos prácticos de configuración que se usan habitualmente en campo y los comandos SMS públicos disponibles para este modelo. Use esta guía para preparar el dispositivo para que reporte al backend de Plaspy y para validar la conectividad antes de incorporar el dispositivo en su cuenta de Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El IDD-213GL soporta transmisión por GPRS y SMS y puede configurarse mediante comandos SMS o herramientas del proveedor; esta página hace referencia a ejemplos públicos de comandos SMS en la documentación del dispositivo y muestra cómo apuntarlo al endpoint del servidor de Plaspy.

## Resumen de la configuración

Configurar el Castel IDD-213GL para Plaspy prepara el equipo para transmitir ubicación y datos diagnósticos a un único endpoint y puerto de Plaspy. El proceso normalmente ajusta valores de APN de la red, indica al rastreador adónde enviar los datos y verifica que el dispositivo sea visible en Plaspy. Dado que Plaspy utiliza el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo, la configuración se centra en parámetros de red y servidor más que en la selección de protocolo.

- Defina el APN y las credenciales de red para que el dispositivo use GPRS y acceda a Internet.
- Configure la dirección y el puerto del servidor para que los datos se envíen a Plaspy.
- Seleccione el tipo de transporte (UDP o TCP) si el dispositivo o el firmware lo requieren.
- Verifique la conectividad mediante una lectura de estado o comprobación y confirme el envío en Plaspy.
- Valide los datos diagnósticos y de posición para asegurar que la telemetría OBD llegue como se espera.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un dispositivo IDD-213GL con alimentación y accesible, instalado en el OBD o en la interfaz correspondiente del vehículo.
- Una tarjeta SIM activa configurada para datos GPRS y SMS si se va a usar comandos SMS para la configuración.
- Credenciales APN correctas del operador de la SIM instalada.
- Conocimiento de la clave secreta o contraseña para comandos SMS; la regla pública por defecto es los últimos 6 caracteres ASCII del ID del dispositivo.
- Acceso al método de configuración del fabricante, como comandos SMS o software del proveedor, para aplicar los cambios.
- Un medio para confirmar que el dispositivo reporta en Plaspy después de la configuración, como la lista de dispositivos de la plataforma o reportes de diagnóstico.

## Cómo se conecta este rastreador a Plaspy

El IDD-213GL envía la ubicación del vehículo y la información diagnóstica al backend configurado. Cuando se apunta al endpoint y puerto de Plaspy, el rastreador transmitirá su telemetría por el transporte elegido para que Plaspy la ingiera y la presente. La detección automática de protocolo de Plaspy simplifica la configuración del servidor porque la plataforma aceptará la conexión del dispositivo en el puerto compartido e interpretará el protocolo.

- El rastreador envía reportes de posición GPS y telemetría OBD al endpoint de Plaspy.
- Elementos diagnósticos como velocidad, RPM, códigos de fallo y estadísticas de combustible o kilometraje se transmiten según las reglas de reporte del dispositivo.
- Notificaciones de eventos como encendido/apagado de ignición o alertas de desconexión se reenviarán a Plaspy una vez configuradas.
- El dispositivo debe configurarse para reportar al endpoint compartido de Plaspy d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Elija UDP o TCP en el dispositivo según la instalación o el firmware; Plaspy acepta ambos en el puerto 8888.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Castel para el IDD-213GL, por ejemplo la configuración por SMS o el software del proveedor.
2. Introduzca la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 como destino.
3. Ajuste el puerto del servidor a 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Seleccione el transporte UDP o TCP si el dispositivo requiere elegirlo.
5. Configure el APN y los valores de usuario y contraseña del APN si el operador lo exige, para que el equipo pueda usar GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere.
7. Valide que el dispositivo reporte en Plaspy revisando la conectividad del dispositivo y los mensajes recientes en la plataforma.

## Ejemplo de comandos de configuración

La documentación del IDD-213GL incluye comandos SMS para configurar GPRS y servidor. El dispositivo usa una clave secreta para la configuración por SMS. Según la guía pública, la clave por defecto para instrucciones SMS son los últimos 6 caracteres ASCII del ID del dispositivo. Reemplace los marcadores cuando envíe los comandos.

- Establecer parámetros APN y el IP y puerto del servidor Plaspy
```
*{{SecretKey}}#set gprs#{{apn}},{{apnu}},{{apnp}},54.85.159.138,8888*
```

- Consultar la configuración GPRS actual en el dispositivo
```
*{{SecretKey}}#get gprs#*
```

Notas sobre los marcadores y su uso:
- {{SecretKey}} — la contraseña de configuración por SMS. Regla pública por defecto: los últimos 6 caracteres ASCII del ID del dispositivo, salvo que el instalador o proveedor la haya cambiado.
- {{apn}} — la cadena APN del operador de la tarjeta SIM.
- {{apnu}} — el usuario APN si lo requiere el operador; deje vacío si no es necesario.
- {{apnp}} — la contraseña APN si la requiere el operador; deje vacío si no es necesaria.
- Use d.plaspy.com o 54.85.159.138 para el campo de servidor; el ejemplo usa la IP y el puerto 8888 según lo requerido por Plaspy.
- Si su dispositivo o firmware exige selección explícita del transporte, utilice la herramienta o la documentación del fabricante para elegir UDP o TCP; el comando SMS anterior configura servidor y puerto pero puede no establecer el transporte en todas las versiones de firmware.

## Notas de configuración

- Las versiones de firmware y las herramientas del proveedor pueden cambiar la sintaxis de los comandos o los campos disponibles; confirme siempre con la documentación más reciente del fabricante.
- El método de configuración por SMS está respaldado por la guía pública del dispositivo; al usar SMS asegúrese de que la SIM tenga habilitado el envío y recepción de SMS y que el dispositivo pueda recibir mensajes.
- Mantenga los marcadores de usuario y contraseña de APN tal cual cuando no sean requeridos por el operador; un usuario o contraseña vacíos son valores válidos para muchos operadores.
- Considere elegir UDP o TCP según la confiabilidad de la red y sus necesidades de monitoreo; Plaspy acepta ambos en el puerto 8888.
- La clave secreta del dispositivo es importante para la seguridad y debe conocerse antes de enviar comandos SMS de configuración.

## Por qué usar Plaspy con esta configuración

Usar el Castel IDD-213GL con Plaspy integra los datos diagnósticos OBD con el reporte de ubicación en tiempo real para ofrecer visibilidad del vehículo y de la flota en una sola plataforma. Las organizaciones pueden combinar el rastreo posicional con los datos de diagnóstico y comportamiento de conducción que recopila el IDD-213GL para supervisar el rendimiento, responder a alertas y analizar tendencias en toda la flota.

Para obtener más información sobre Plaspy y cómo procesa datos de rastreadores compatibles visite https://www.plaspy.com. Para métodos de configuración específicos por dispositivo, notas de firmware y detalles del fabricante, verifique la información en el sitio de Castel http://www.castelecom.com/ ya que el comportamiento del dispositivo y los comandos de configuración pueden cambiar con el tiempo.
