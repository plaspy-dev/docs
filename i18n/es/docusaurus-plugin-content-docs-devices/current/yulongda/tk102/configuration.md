---
slug: /yulongda/tk102/configuration
id: tk102-configuration
sidebar_label: Configuration
title: YulongDa - TK102 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador YulongDa TK102 para conectarlo a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - Configuración YulongDa TK102
  - Instalación YulongDa TK102
  - TK102 Plaspy
  - Configuración servidor TK102
  - Instalación rastreador GPS TK102
  - Configuración GPS YulongDa
  - Configuración rastreador Plaspy
  - Configuración de localización vehicular
  - Configuración plataforma GPS
  - Comandos SMS rastreador
---

# YulongDa - Configuración del TK102

Esta página documenta el contexto público de configuración para usar el rastreador GPS YulongDa TK102 con la plataforma Plaspy. Se centra en los ajustes de servidor y los comandos SMS prácticos que se usan habitualmente para apuntar el TK102 a Plaspy, y explica el flujo básico necesario para preparar el dispositivo y validar la conectividad. Los detalles técnicos aquí se basan en la descripción del modelo y en los comandos de configuración públicos disponibles para el TK102.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK102 soporta GSM y GPRS y puede configurarse por SMS según los comandos públicos que se muestran más abajo. Cuando sea posible, consulte la documentación y las herramientas del fabricante para confirmar detalles específicos del equipo.

## Resumen de configuración

Preparar un TK102 para Plaspy significa configurar sus parámetros GPRS o enviar los comandos SMS correctos para que el rastreador reporte al endpoint del servidor de Plaspy. El proceso asegura que el dispositivo pueda registrarse en la red celular, establecer una sesión GPRS y transmitir posiciones y estados a Plaspy para su visualización y monitoreo.

- Indicar al rastreador que reporte al endpoint del servidor de Plaspy para que las posiciones lleguen a la plataforma.
- Configurar el APN y los parámetros GPRS para que el dispositivo pueda abrir una sesión de datos en la red móvil.
- Seleccionar el tipo de transporte UDP o TCP en el puerto 8888 si el rastreador requiere una elección explícita.
- Validar la conectividad confirmando que el dispositivo sea visible y reporte en Plaspy.
- Utilizar comandos SMS o la herramienta del proveedor según el firmware del dispositivo y la preferencia del instalador.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos previos típicos

- Una tarjeta SIM válida instalada en el TK102 con capacidad de datos GPRS y operación por SMS.
- Batería con carga suficiente o alimentación externa para evitar interrupciones durante la configuración.
- Acceso al método oficial de configuración del fabricante o a los comandos de control por SMS para el TK102.
- Conocimiento del APN correcto y de las credenciales del operador necesarias para datos móviles en la SIM elegida.
- Un teléfono capaz de enviar SMS al rastreador si se va a usar la configuración por SMS.
- Confirmación de que el firmware del rastreador soporte los comandos SMS mostrados a continuación y acepte la contraseña predeterminada si aplica.

## Cómo se conecta este rastreador a Plaspy

El TK102 se configura para reportar ubicación y eventos de dispositivo al endpoint y puerto compartidos de Plaspy para que el equipo aparezca en la plataforma para monitoreo y análisis. Una vez que el rastreador tenga una sesión GPRS funcionando y se apliquen los ajustes del servidor, Plaspy recibirá actualizaciones periódicas de posición y las alertas soportadas que el dispositivo envíe.

- El rastreador inicia una conexión GPRS usando el APN y las credenciales configuradas.
- Abre una sesión de datos hacia d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Envía mensajes de ubicación y estado por UDP o TCP según el transporte seleccionado.
- Plaspy detecta automáticamente el protocolo del equipo y procesa los mensajes entrantes para mostrarlos.
- La visibilidad en Plaspy se verifica cuando el dispositivo comienza a reportar y aparecen posiciones en la plataforma.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial del fabricante o al software, o prepárese para enviar comandos SMS según las instrucciones del TK102.
2. Ingrese la dirección del servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en los ajustes del dispositivo.
3. Configure el puerto 8888 para el servidor GPRS; note que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP si el equipo requiere selección de transporte, según la preferencia del instalador o las condiciones de la red.
5. Configure el APN y cualquier credencial del operador necesaria para la conectividad de datos móviles.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware del rastreador requiere reinicio para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy revisando las posiciones entrantes y los mensajes de latido en la plataforma.

## Ejemplos de comandos de configuración

El TK102 soporta configuración por SMS. Los siguientes comandos públicos se toman de ejemplos de configuración del dispositivo y están pensados para ser enviados como mensajes SMS al rastreador. La contraseña predeterminada del dispositivo usada en estos ejemplos es 123456. Conserve los marcadores de posición al enviar sus valores reales de APN.

- Comando opcional de restauración de fábrica inicial
```text
#begin#123456#
```
Este comando restaura la configuración de fábrica y puede usarse como paso inicial si necesita resetear el equipo. Úselo solo cuando sea necesario realizar un reinicio.

- Configurar el APN del operador
```text
#APN#123456#{{apn}}#{{apnu}}#{{apnp}}#
```
Explicación de los marcadores de posición
- {{apn}} es el nombre del APN del operador móvil requerido para datos GPRS.
- {{apnu}} es el nombre de usuario del APN opcional si lo requiere el operador.
- {{apnp}} es la contraseña del APN opcional si lo requiere el operador.
Si el operador no requiere usuario o contraseña, esos marcadores pueden omitirse según el formato de comando del dispositivo.

- Establecer el servidor GPRS para apuntar a Plaspy
```text
#adminip#123456#54.85.159.138#8888#
```
Este comando configura el rastreador para enviar datos a la IP y puerto del servidor de Plaspy. Alternativamente, puede usar d.plaspy.com en herramientas del proveedor que acepten nombres de dominio.

Envíe estos comandos SMS desde un número autorizado o a través de la herramienta recomendada por el fabricante según el manual del dispositivo. Mantenga el orden de comandos cuando realice una configuración inicial como se muestra arriba.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar los formatos de los comandos o las funciones soportadas; verifique la sintaxis exacta en el manual oficial.
- El TK102 soporta configuración por SMS como se muestra en los ejemplos; algunos instaladores prefieren el software del proveedor o herramientas USB cuando están disponibles.
- TCP y UDP son compatibles como transporte; elija la opción más adecuada para su red y su entorno de firewall.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que debe usar el puerto indicado al configurar el equipo.
- Asegúrese de que el APN y las credenciales de la SIM sean correctos antes de probar la conectividad con el servidor para evitar fallos de conexión.

## Por qué usar Plaspy con esta configuración

Usar el TK102 con Plaspy ofrece una forma sencilla de monitorear centralizadamente la ubicación, recibir actualizaciones de estado y gestionar una flota de dispositivos desde una única plataforma. Al configurar el TK102 para que reporte al endpoint y puerto compartidos de Plaspy, las organizaciones obtienen visibilidad consistente entre dispositivos y una gestión de servidor simplificada, ya que Plaspy maneja automáticamente la detección de protocolos.

Learn more about Plaspy and how it can fit your tracking needs at https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and manufacturer guidance verify the official documentation at http://www.yulongdatechnology.com because configuration methods and device behavior can change over time.
