---
slug: /bofan/pt_201/configuration
id: pt_201-configuration
sidebar_label: Configuration
title: Bofan - PT-201 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Bofan PT-201 con ajustes de servidor Plaspy y ejemplos de comandos SMS para GPRS
keywords:
  - configuración Bofan PT-201
  - instalación Bofan PT-201
  - configuración servidor Bofan PT-201
  - integración PT-201 Plaspy
  - configuración rastreador GPS Bofan
  - comandos SMS PT-201
  - configuración GPRS PT-201
  - configuración rastreador GPS motocicleta
  - configuración rastreador Plaspy
  - configuración software seguimiento PT-201
---

# Bofan - PT-201 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Bofan PT-201 con la plataforma Plaspy. Reúne los ajustes compartidos del servidor Plaspy y los comandos SMS de configuración más comunes publicados para el PT-201, y explica cómo aplicar esos valores para preparar el dispositivo para el seguimiento en vivo en Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, las prácticas del instalador y las herramientas del proveedor. Los ejemplos a continuación emplean comandos SMS públicos del PT-201 cuando están disponibles y se enfocan en pasos prácticos para apuntar el dispositivo a Plaspy para reportes por GPRS.

## Resumen de la configuración

El proceso de configuración prepara el PT-201 para comunicarse con la plataforma Plaspy mediante GPRS, de modo que la ubicación y los eventos aparezcan en su cuenta Plaspy. Para los PT-201 esto suele implicar enviar comandos de configuración por SMS o usar la herramienta del fabricante para establecer un APN, un identificador, el endpoint del servidor y el intervalo de reporte.

- Establecer el identificador del dispositivo usado para el registro en el servidor para que Plaspy pueda asociar los mensajes con el equipo
- Configurar el APN de datos móviles para que el dispositivo pueda crear la conexión GPRS
- Apuntar el dispositivo al endpoint del servidor Plaspy y al puerto compartido usado por Plaspy
- Fijar un intervalo de reporte para controlar la frecuencia de actualización de la ubicación en Plaspy
- Validar la conectividad y confirmar que el dispositivo aparece en Plaspy tras aplicar la configuración

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: UDP o TCP pueden usarse en el puerto 8888 dependiendo de la capacidad del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador para que los dispositivos puedan reportar usando su protocolo nativo mientras comparten el mismo puerto Plaspy

## Requisitos típicos antes de configurar

- Un PT-201 con alimentación y acceso para enviar y recibir SMS o la herramienta de configuración del fabricante
- Una SIM activa con datos habilitados y el APN correcto del operador móvil
- El IMEI del dispositivo o el identificador que se usará al registrar el rastreador en Plaspy
- Acceso a la contraseña SMS por defecto del dispositivo si la configuración via SMS es necesaria (en los ejemplos el valor por defecto mostrado es 000000)
- Conocimiento básico de si su dispositivo requiere selección explícita de TCP o UDP al configurar el transporte del servidor
- Una cuenta Plaspy lista para registrar el dispositivo y confirmar que el mismo está reportando después de la configuración

## Cómo se conecta este rastreador a Plaspy

El PT-201 envía mensajes de ubicación y estado por GPRS a un endpoint y puerto de servidor configurados. Al apuntarlo a Plaspy, el rastreador reporta a la dirección y puerto compartidos de Plaspy para que la plataforma pueda ingerir los mensajes y mostrarlos.

- El dispositivo se configura para reportar al dominio o IP del servidor Plaspy y al puerto compartido 8888
- Los mensajes se envían por el transporte elegido (UDP o TCP) según soporte del equipo
- Plaspy relaciona el identificador del dispositivo con un registro y procesa la telemetría entrante automáticamente
- Las actualizaciones regulares de posición y las alertas enviadas por el PT-201 se vuelven visibles en Plaspy para monitoreo y revisión histórica
- La validación de la conectividad se realiza confirmando que el rastreador aparece y envía datos a Plaspy luego de la configuración

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración del fabricante o al software, o prepárese para enviar comandos SMS desde un teléfono con la SIM insertada en el rastreador.
2. Ingrese el servidor Plaspy por dominio d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en la configuración del dispositivo.
3. Configure el puerto del dispositivo a 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el PT-201 requiere una selección explícita de transporte.
5. Establezca el identificador del dispositivo (ID de 14 dígitos comúnmente usado con Plaspy) y configure el APN usando los valores del operador.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o las instrucciones del proveedor lo requieren.
7. Valide que el dispositivo reporte a Plaspy y aparezca en su cuenta, ajustando APN o transporte si es necesario.

## Comandos de ejemplo para configuración

El PT-201 soporta configuración vía SMS. Las siguientes plantillas de comandos públicos se proporcionan en la documentación del fabricante y se presentan aquí en el orden típico de ejecución. La contraseña SMS por defecto en estos ejemplos es 000000.

- Reinicio de fábrica inicial opcional (usar solo si es necesario):
```text
000000DFT
```

- Establecer el identificador de 14 dígitos usado con Plaspy (use los últimos 14 dígitos del IMEI). Reemplace \<14-digit-id> por el identificador real de 14 dígitos:
```text
000000GID<14-digit-id>
```
Ejemplo: si los últimos 14 dígitos del IMEI son 12345678901234, envíe:
```text
000000GID12345678901234
```

- Configurar el APN del operador móvil. Conserve los marcadores de posición para usuario y contraseña si el operador los requiere:
```text
000000APN{{apn}},{{apnu}},{{apnp}}
```
Explicación de los marcadores:
- {{apn}} = nombre del APN del operador
- {{apnu}} = usuario del APN, si el operador lo solicita (dejar en blanco si no aplica)
- {{apnp}} = contraseña del APN, si el operador la solicita (dejar en blanco si no aplica)

- Configurar el servidor GPRS para apuntar a Plaspy. Este ejemplo usa la IP pública y el puerto de Plaspy:
```text
000000SVR54.85.159.138,8888
```
Puede sustituir d.plaspy.com por la IP si el dispositivo acepta nombres de dominio:
```text
000000SVRd.plaspy.com,8888
```

- Fijar el intervalo de actualización de posición a 1 minuto (60 segundos):
```text
000000GTI60
```

Envíe cada SMS al número del rastreador usando la SIM del dispositivo. Espere cualquier SMS de confirmación del dispositivo antes de proceder al siguiente paso cuando sea posible.

## Notas de configuración

- El PT-201 soporta la configuración por SMS como se muestra; las herramientas del fabricante pueden ofrecer los mismos ajustes mediante USB, software de configuración o una interfaz de instalador.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o las opciones disponibles. Verifique los comandos con el manual actual del PT-201 proporcionado por el fabricante.
- TCP frente a UDP es una opción a nivel de dispositivo. Elija el transporte soportado por su firmware y según las condiciones de red; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- Mantenga segura la contraseña SMS por defecto del dispositivo. Los ejemplos públicos usan 000000 cuando aplica; cambie la contraseña si su política de seguridad lo requiere.
- Los datos del APN varían por operador y mercado. Use los valores de APN, usuario y contraseña que correspondan al operador al enviar el comando APN.

## Por qué usar Plaspy con esta configuración

Usar el PT-201 con Plaspy ofrece a administradores de flotas de motocicletas y a usuarios particulares una plataforma consolidada para visibilidad, seguimiento en tiempo real y notificaciones de eventos. Apuntar el PT-201 a Plaspy con los ajustes de servidor compartidos simplifica la incorporación al usar un endpoint y puerto consistentes para todos los dispositivos compatibles, y la detección automática de protocolo de Plaspy reduce la necesidad de seleccionar manualmente el protocolo en muchos casos.

Para saber más sobre Plaspy y las integraciones de dispositivos compatibles visite https://www.plaspy.com. Para obtener los comandos específicos más actualizados, detalles de firmware e instrucciones de instalación, verifique la documentación oficial del PT-201 en https://www.bofancloud.com/ ya que las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo.
