---
slug: /meitrack/mvt_380/configuration
id: mvt_380-configuration
sidebar_label: Configuration
title: Meitrack - MVT-380 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Meitrack MVT-380 para reportar a Plaspy usando ajustes de servidor públicos y comandos SMS de ejemplo
keywords:
  - Configuración Meitrack MVT-380
  - Instalación Meitrack MVT-380
  - MVT-380 Plaspy
  - Configuración servidor MVT 380
  - Configuración rastreador GPS Meitrack
  - Configuración plataforma de rastreo Meitrack
  - Rastreo de vehículos MVT-380
  - Configuración rastreador GPS Plaspy
  - Configuración SMS MVT-380
  - Configuración GPRS Meitrack MVT-380
---

# Meitrack - Configuración del MVT-380

Esta página describe cómo configurar públicamente el Meitrack MVT-380 para funcionar con Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere, enumera los requisitos habituales y ofrece ejemplos prácticos de comandos SMS públicos para que usted pueda apuntar el equipo a Plaspy y comenzar a reportar ubicación y eventos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Utilice esta guía como referencia práctica y contraste la información con la documentación de Meitrack para comandos y comportamientos específicos de su firmware.

## Resumen de configuración

Este proceso prepara al MVT-380 para enviar datos de ubicación y eventos a Plaspy usando el endpoint y puerto compartidos de la plataforma. Los ejemplos públicos de configuración para este modelo usan comandos SMS para establecer los parámetros GPRS, la zona horaria, el intervalo de reporte y el manejo de eventos.

- Señale el rastreador al endpoint de Plaspy para que pueda enviar telemetría y mensajes de evento.
- Proporcione el APN y, si aplica, las credenciales del APN para que el equipo establezca conexión GPRS.
- Configure los intervalos de reporte y la zona horaria para que los datos aparezcan correctamente en Plaspy.
- Valide la conectividad y confirme que el MVT-380 aparece en Plaspy tras la configuración.
- Use los comandos SMS que se muestran como referencia al emplear herramientas de Meitrack o métodos de configuración por SMS.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com para configuración basada en DNS
- IP del servidor 54.85.159.138 para configuración por IP directa
- Puerto 8888 como puerto de destino para todos los equipos
- Soporte de transporte UDP o TCP cuando el dispositivo requiera seleccionar transporte
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto para reportar

## Requisitos típicos antes de la instalación

- Asegúrese de que el MVT-380 tenga una tarjeta SIM funcional con plan de datos activo y capacidad de SMS
- Tenga el equipo alimentado y accesible para recibir SMS o para usar herramientas de configuración del fabricante
- Conozca o confirme la contraseña del dispositivo usada para comandos SMS (el ejemplo por defecto es 0000)
- Obtenga el APN correcto para la tarjeta SIM y cualquier nombre de usuario o contraseña del APN si se requieren
- Acceso al método oficial de configuración de Meitrack como comandos SMS o software del proveedor
- Un método para verificar la conectividad del dispositivo con el servidor, por ejemplo consultando la lista de dispositivos en Plaspy o los registros del servidor

## Cómo se conecta este rastreador a Plaspy

El MVT-380 se configura para enviar sus datos de ubicación y eventos directamente al endpoint y puerto del servidor de Plaspy. Una vez que el rastreador tenga conectividad GPRS y los parámetros del servidor estén definidos, Plaspy detectará el protocolo entrante y comenzará a procesar la telemetría reportada.

- El dispositivo envía datos a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El transporte puede configurarse como UDP o TCP cuando el dispositivo exige una opción
- Plaspy detecta automáticamente el protocolo del rastreador y asigna los datos entrantes al manejador correspondiente
- Los intervalos de reporte y las opciones de evento determinan la frecuencia y condiciones en que se envían los datos
- Una configuración correcta hace que el rastreador sea visible en Plaspy para monitoreo e informes históricos

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Meitrack o al software, o use comandos SMS según lo indique el fabricante.
2. Ingrese el servidor de Plaspy como d.plaspy.com o la IP directa 54.85.159.138 según prefiera.
3. Establezca el puerto de destino en 8888. Todos los dispositivos de Plaspy usan el mismo puerto.
4. Elija UDP o TCP en el equipo si el rastreador requiere seleccionar el transporte.
5. Proporcione la configuración del APN y cualquier nombre de usuario o contraseña del APN que exija la SIM.
6. Aplique o guarde la configuración y reinicie el dispositivo si lo requiere el equipo o después de comandos SMS.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la lista de dispositivos o en los registros de conexión de la plataforma.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS provienen de la guía pública de configuración de Meitrack para el MVT-380. La contraseña de ejemplo usada en estos comandos es 0000, que es el valor de fábrica. Envíe estos SMS al número del dispositivo en el orden mostrado al realizar la configuración inicial.

1. Reinicio opcional a ajustes de fábrica (usar solo si es necesario)
```
0000,F11
```
- Restablece la configuración de fábrica según el ejemplo público. Esta instrucción es opcional o para configuraciones iniciales solamente.

2. Configure el servidor GPRS hacia Plaspy y provea los marcadores de APN
```
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
- Este comando establece el servidor GPRS a la IP de Plaspy 54.85.159.138 y el puerto 8888. Incluye marcadores {{apn}} para el APN, {{apnu}} para el usuario del APN y {{apnp}} para la contraseña del APN. Conserve estos marcadores y reemplácelos con los valores de su operador según sea necesario.
- Alternativamente puede configurar el servidor usando el dominio d.plaspy.com si el equipo admite DNS.

3. Configure la zona horaria a UTC 0
```
0000,B36,0
```
- Ajuste la zona horaria del equipo para que las marcas de tiempo coincidan con sus expectativas en Plaspy.

4. Ajuste el intervalo de actualización a cada 1 minuto
```
0000,A12,6,0
```
- Modifique el intervalo periódico de reporte. Este ejemplo configura el reporte cada 1 minuto según el conjunto de comandos público.

5. Configure las opciones de reporte de eventos
```
0000,C03,0
```
- Configure el manejo de eventos según el comando de ejemplo público para eventos.

Nota: Mantenga el orden de comandos SMS cuando la secuencia sea importante en la configuración inicial. Reemplace los marcadores de APN por los valores de su operador. Si su equipo requiere usar el dominio en lugar de la IP en los comandos SMS, sustituya d.plaspy.com en el comando del servidor cuando su firmware lo soporte.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar los parámetros y comandos disponibles; verifique los comandos según el firmware de su equipo.
- La guía pública del MVT-380 muestra la configuración por SMS y la configuración de servidor GPRS usando marcadores de APN; utilice las credenciales APN correctas para su SIM.
- Elija TCP o UDP según las necesidades de la instalación y el soporte del equipo; Plaspy acepta ambos y detecta el protocolo automáticamente.
- La contraseña del dispositivo en los ejemplos públicos es 0000 por defecto; confirme si su equipo tiene otra contraseña y cambie los valores por defecto cuando corresponda.
- Cuando sea posible, use las herramientas oficiales de Meitrack o los formatos de SMS documentados para evitar problemas de sintaxis.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Meitrack MVT-380 proporciona a las organizaciones visibilidad consolidada del movimiento de vehículos y activos al encaminar la telemetría del rastreador a un endpoint compartido. La detección automática de protocolo de Plaspy y el uso de un puerto uniforme reducen las diferencias de configuración por dispositivo y facilitan la incorporación masiva de unidades.

Para conocer más sobre Plaspy y las funcionalidades de la plataforma, visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, el comportamiento del firmware y detalles de configuración, siempre verifique la información en el sitio oficial de Meitrack https://www.meitrack.com/ para que su configuración coincida con la última guía del fabricante.
