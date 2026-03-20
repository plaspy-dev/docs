---
slug: /megastek/mt_100/configuration
id: mt_100-configuration
sidebar_label: Configuration
title: Megastek - MT-100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el Megastek MT-100 a Plaspy con ajustes de servidor compartido y comandos SMS o GPRS
keywords:
  - Configuración Megastek MT-100
  - Configuración MT-100 Plaspy
  - Configuración rastreador Megastek
  - Configuración servidor MT-100
  - Configuración plataforma Megastek GPS
  - MT-100 comandos GPRS SMS
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS de mano
  - Configuración seguimiento de vehículos y activos
  - Detección de protocolo de rastreador GPS
---

# Megastek - Configuración del MT-100

Esta página describe el contexto público de configuración para usar el Megastek MT-100 con la plataforma Plaspy. Se centra en los ajustes de servidor compartido de Plaspy y en los pasos prácticos para apuntar el MT-100 a Plaspy, de modo que el dispositivo envíe ubicación y eventos a la plataforma. Las instrucciones usan ejemplos de configuración públicos y muestran cómo aplicar ajustes vía SMS o GPRS para la integración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El MT-100 soporta métodos de configuración por SMS y GPRS según la documentación pública, y los comandos SMS de ejemplo que se muestran reflejan un flujo de configuración común usando la contraseña por defecto del dispositivo cuando aplica.

## Resumen de la configuración

El objetivo de la configuración es preparar el MT-100 para comunicarse de forma fiable con Plaspy y validar que los datos lleguen a su cuenta Plaspy. El proceso normalmente configura la identidad del dispositivo, los ajustes APN, el endpoint del servidor, el transporte y el intervalo de reporte para que Plaspy reciba actualizaciones periódicas.

- Definir el ID del dispositivo y verificar que el IMEI esté registrado en la plataforma.
- Configurar el APN del operador para que el dispositivo use datos GPRS.
- Establecer el servidor GPRS en el endpoint y puerto de Plaspy para que el rastreador envíe la telemetría.
- Elegir UDP o TCP según la capacidad del rastreador y activar el modo de reporte por GPRS.
- Fijar un intervalo de reporte apropiado y verificar que el dispositivo envíe datos a Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP según la capacidad del rastreador
- Detección automática de protocolo en Plaspy: la plataforma identificará el protocolo del rastreador una vez que lleguen mensajes

## Requisitos típicos antes de la configuración

- Un MT-100 con batería y operativo, con el número IMEI conocido.
- Una tarjeta SIM con datos y capacidad de SMS insertada y activa en el dispositivo.
- Acceso al método oficial de configuración Megastek para el MT-100, como comandos SMS o el software del proveedor.
- Conocimiento del APN del operador y, si aplica, del usuario y contraseña del APN.
- La contraseña por defecto del dispositivo si va a usar configuración vía SMS; en los comandos de ejemplo a continuación la contraseña por defecto es 000000.
- Una cuenta en Plaspy y la certeza de que el dispositivo reportará al endpoint y puerto compartidos de Plaspy.

## Cómo se conecta este rastreador a Plaspy

El MT-100 se configura para enviar datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda mostrar la posición y las alertas del rastreador. Una vez que el dispositivo apunte al servidor Plaspy y el modo GPRS esté activado, Plaspy detectará automáticamente el protocolo del rastreador y comenzará a procesar los mensajes.

- El dispositivo se identifica con el ID configurado o el IMEI para que Plaspy asocie los reportes al rastreador correcto.
- Las sesiones de datos GPRS se usan para enviar actualizaciones de posición al endpoint de Plaspy.
- El rastreador envía reportes periódicos según el intervalo configurado para mostrar movimiento en tiempo real.
- Alarmas y eventos como SOS, geocercas o batería baja se transmiten a Plaspy para notificaciones y registro.
- La detección automática de protocolos de Plaspy analiza los mensajes entrantes y gestiona el rastreador sin necesidad de seleccionar manualmente el protocolo.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Megastek, por ejemplo comandos SMS o la herramienta del fabricante para el MT-100.
2. Verifique que el dispositivo tenga una SIM funcional y conozca el APN, el usuario APN opcional y la contraseña APN si el operador los requiere.
3. Ingrese el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Configure el puerto del servidor en 8888 y seleccione UDP o TCP si el dispositivo requiere elegir el transporte.
5. Aplique o guarde la configuración y active el modo de reporte GPRS en el dispositivo.
6. Reinicie el equipo si el firmware del rastreador lo exige o si el fabricante lo recomienda.
7. Valide que el dispositivo reporta a Plaspy y que las posiciones y eventos aparecen en su cuenta; confirme que la detección automática de protocolo ha identificado el rastreador.

## Ejemplos de comandos de configuración

El MT-100 puede configurarse enviando comandos SMS al dispositivo. Los siguientes ejemplos son públicos y usan la contraseña por defecto 000000 en los textos de ejemplo. Reemplace los marcadores según se indica después de cada comando.

1. Establecer el ID del dispositivo (el ejemplo usa un identificador de 15 dígitos derivado del IMEI)
```text
M000000,22,XXXXXXXXXXXXXXX
```
- Reemplace XXXXXXXXXXXXXXX por el ID de dispositivo de 15 dígitos o el identificador derivado del IMEI que requiera su implementación. El flujo de ejemplo del fabricante muestra cómo construir un ID de 15 dígitos a partir del IMEI; envíe exactamente el ID de 15 dígitos que el dispositivo espera.

2. Configurar el APN del operador (APN y usuario y contraseña opcionales)
```text
M000000,23,{{apn}},{{apnu}},{{apnp}}
```
- {{apn}} es la cadena APN del operador móvil.
- {{apnu}} es el usuario del APN si el operador lo requiere; deje vacío u omita si no se utiliza.
- {{apnp}} es la contraseña del APN si es necesaria; deje vacío u omita si no se utiliza.

3. Establecer el intervalo de actualización a 60 segundos
```text
M000000,25,60
```
- Fija el intervalo de reporte periódico en 60 segundos. Cambie el número para ajustar la frecuencia de reporte según sus necesidades.

4. Configurar el servidor GPRS apuntando a Plaspy con la IP y el puerto
```text
M000000,24,56 54.85.159.138,8888
```
- Este comando configura el envío de datos GPRS hacia Plaspy usando la IP 54.85.159.138 en el puerto 8888.
- Si su versión de firmware admite nombres DNS en los ajustes de servidor, puede usar d.plaspy.com en lugar de la IP; revise la documentación del fabricante antes de cambiar este valor.

5. Habilitar modo GPRS
```text
M000000,21,2
```
- Activa GPRS como modo de transporte para los reportes en el rastreador.

Notas sobre estos comandos
- La contraseña de muestra en estos comandos públicos es 000000, que corresponde al valor de fábrica en el flujo de ejemplo. Si usted ha cambiado la contraseña, reemplace 000000 por la contraseña actual del dispositivo.
- Mantenga el orden de comandos cuando el dispositivo lo requiera: típicamente configure el APN y el servidor primero, luego habilite GPRS y establezca el intervalo de reporte.
- Si el formato de algún comando difiere en su versión de firmware, siga la documentación oficial de Megastek proporcionada con su MT-100.

## Observaciones de configuración

- Las revisiones de firmware y hardware pueden cambiar los formatos de comando y los parámetros soportados; confirme siempre la sintaxis SMS exacta con la documentación de Megastek para su revisión del MT-100.
- El MT-100 soporta tanto la configuración por SMS como por GPRS en ejemplos públicos; los comandos SMS son útiles para configuraciones remotas pero requieren una SIM con saldo para SMS.
- Al elegir el transporte, UDP suele usarse por menor sobrecarga mientras que TCP puede ofrecer entrega basada en sesión según el soporte de firmware; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Mantenga la contraseña del dispositivo segura y cambie los valores de fábrica cuando corresponda tras la provisión inicial.
- Si el dispositivo soporta DNS para los ajustes de servidor, usar d.plaspy.com puede hacer que futuras actualizaciones de servidores Plaspy sean transparentes para el equipo; de lo contrario utilice la IP proporcionada.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Megastek MT-100 ofrece una forma sencilla de centralizar el rastreo en vivo, las alarmas y los datos históricos de rastreadores de mano. Señalar el MT-100 al endpoint y puerto compartidos de Plaspy permite que la plataforma detecte automáticamente el protocolo del rastreador y comience a procesar los reportes, reduciendo la configuración manual de protocolos y simplificando el despliegue en múltiples dispositivos.

Para saber más sobre Plaspy y las funcionalidades de la plataforma visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, avisos de firmware y guía del fabricante, consulte la web de Megastek en https://www.megastek.com/ ya que las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo.
