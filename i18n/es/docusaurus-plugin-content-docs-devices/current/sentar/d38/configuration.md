---
slug: /sentar/d38/configuration
id: d38-configuration
sidebar_label: Configuration
title: Sentar - D38 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Sentar D38 para conectar el rastreador a Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración Sentar D38
  - Configuración D38 Plaspy
  - Configuración servidor Sentar D38
  - Configuración rastreador GPS D38
  - Seguimiento reloj inteligente Sentar
  - Configuración SMS D38
  - Configuración de dispositivo Plaspy
  - Configuración rastreador GPS Plaspy
  - Ajustes APN Sentar D38
  - Comandos SMS Sentar D38
---

# Sentar - Configuración del D38

Esta página resume el contexto público de configuración para usar el Sentar D38 con Plaspy. El D38 es un reloj GPS compacto basado en Android pensado para la seguridad infantil y la supervisión por parte de cuidadores. Soporta posicionamiento por GPS, AGPS, LBS y WiFi, y usa conectividad celular con una Nano SIM. Cuando esté disponible, el dispositivo puede configurarse para enviar ubicación y estado a Plaspy empleando los métodos públicos que se describen a continuación.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que la mayoría de los equipos sólo necesitan configurar un único host y puerto. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El D38 puede configurarse mediante comandos SMS como se muestra en los comandos públicos del fabricante a continuación; la contraseña SMS por defecto del dispositivo es 123456 y los ejemplos que siguen reflejan comandos disponibles públicamente.

## Resumen de la configuración

Esta configuración prepara un dispositivo D38 para enviar datos de ubicación, estado y eventos a la plataforma Plaspy, de modo que el dispositivo quede visible y gestionable desde la interfaz de Plaspy. El proceso se enfoca en tres objetivos prácticos: establecer los parámetros de red y APN, apuntar el dispositivo al endpoint de Plaspy y validar que el dispositivo está reportando correctamente.

- Configurar el APN y parámetros de red para que el dispositivo tenga conectividad GPRS/paquetes.
- Apuntar el rastreador al endpoint y puerto del servidor Plaspy para que los datos se enruten a la plataforma.
- Elegir el tipo de transporte (UDP o TCP) si el dispositivo lo requiere, usando las opciones que soporta Plaspy.
- Definir un intervalo de subida apropiado para que Plaspy reciba actualizaciones con la frecuencia deseada.
- Verificar los ajustes del dispositivo y confirmar que el D38 aparece en Plaspy después de reportar.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma acepta muchos protocolos comunes

Nota: Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará el protocolo automáticamente cuando el dispositivo se conecte.

## Requisitos típicos antes de la configuración

- Un dispositivo D38 con batería y una Nano SIM funcionante con servicio de datos activo
- Acceso al método de configuración por SMS del dispositivo o a la herramienta oficial de configuración de Sentar
- Conocimiento del APN, usuario y contraseña del operador para la SIM (en los ejemplos se usan los marcadores {{apn}}, {{apnu}}, {{apnp}})
- La contraseña SMS por defecto del dispositivo 123456, o la contraseña del dispositivo si ya fue cambiada
- Un medio para recibir las respuestas de verificación del dispositivo (respuestas SMS del equipo o monitoreo en Plaspy de los primeros reportes)

## Cómo se conecta este rastreador a Plaspy

El D38 envía soluciones GNSS y datos complementarios de posicionamiento al endpoint de Plaspy para que la plataforma pueda mostrar ubicación en tiempo real, historial y eventos. Cuando está configurado con el host y puerto de Plaspy, el rastreador reporta su telemetría por datos móviles utilizando el transporte seleccionado.

- El dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- Actualizaciones de posición, eventos SOS y estado del dispositivo se envían a Plaspy para georreferenciación y alertas.
- Plaspy detecta el protocolo automáticamente, por lo que el mismo puerto acepta tráfico compatible de distintos rastreadores.
- La elección entre UDP o TCP en el dispositivo determina el transporte empleado para entregar datos al servidor Plaspy.
- Una vez que el dispositivo reporta, Plaspy ofrece visibilidad del historial de ubicaciones y monitorización operativa.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial del fabricante, como la interfaz de comandos SMS de Sentar o la herramienta de configuración del proveedor.
2. Verifique que el D38 tenga una Nano SIM funcional y confirme los datos del APN del operador.
3. Ingrese el servidor de Plaspy como d.plaspy.com o utilice la IP del servidor 54.85.159.138 en los ajustes del dispositivo.
4. Establezca el puerto en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
5. Seleccione UDP o TCP si el dispositivo requiere una selección explícita del transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si el flujo de trabajo o el equipo lo requieren.
7. Valide que el dispositivo reporte a Plaspy comprobando la primera actualización de ubicación y verificando la telemetría en la plataforma.

Si utiliza configuración por SMS, siga la secuencia de comandos del fabricante mostrada abajo en Ejemplos de comandos de configuración, que es el método práctico para muchos dispositivos D38.

## Ejemplos de comandos de configuración

El modelo D38 admite comandos basados en SMS. Los siguientes comandos SMS públicos aparecen en la documentación del fabricante. Envíe cada comando como un SMS individual desde un número autorizado. La configuración de ejemplo usa la contraseña por defecto del dispositivo 123456. El comando de restablecimiento de fábrica es opcional y sólo para configuración inicial o resolución de problemas.

- Restablecer a valores de fábrica (opcional para configuración inicial)
```text
pw,123456,factory#
```

- Establecer la zona horaria a UTC 0
```text
pw,123456,lz,0,0#
```

- Comprobar MCC y MNC o información IMSI
```text
pw,123456,imsi#
```

- Establecer el APN del operador donde {{apn}} {{apnu}} y {{apnp}} son el APN, usuario y contraseña y xxxyy representa MCC y MNC concatenados
```text
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```
Explicación: reemplace {{apn}}, {{apnu}}, {{apnp}} por el APN, usuario y contraseña de su operador. Reemplace xxxyy por los dígitos MCC y MNC del operador.

- Establecer el servidor GPRS a Plaspy usando la IP pública del servidor y el puerto
```text
pw,123456.ip,54.85.159.138,8888#
```
Nota: Esta cadena de comando exacta se proporciona en el contenido público de configuración. Algunas variantes de firmware pueden requerir un formato ligeramente distinto, por ejemplo incluyendo una coma entre la contraseña y la palabra ip. Si este comando no aplica, consulte la documentación de Sentar o la respuesta del dispositivo para el formato correcto.

- Establecer el intervalo de subida a 300 segundos
```text
pw123456,upload,300#
```
Nota: Este comando aparece en la lista de configuración publicada. Algunos dispositivos requieren una coma después de pw y la contraseña, como en otros comandos; siga el formato que indique la respuesta del dispositivo.

- Comprobar ajustes y estado
```text
pw,123456,ts#
```

Use el comando de comprobación para confirmar que los cambios de APN, servidor e intervalo fueron aceptados.

## Notas de configuración

- La configuración por SMS está disponible en los comandos públicos que se muestran arriba; algunos instaladores prefieren una herramienta del proveedor o una interfaz web si está disponible para aprovisionamiento masivo.
- La contraseña SMS por defecto en la documentación pública del D38 es 123456; cambie esta contraseña después de la configuración por motivos de seguridad.
- Plaspy soporta tanto UDP como TCP en el puerto 8888 y detecta automáticamente el protocolo del rastreador cuando llegan datos.
- El firmware y la sintaxis de comandos pueden variar según el lote de producción o el firmware regional; confirme los formatos exactos de los comandos SMS si la respuesta del dispositivo indica un error.
- Si un comando con IP de servidor no se comporta como se espera, intente usar el dominio d.plaspy.com cuando el conjunto de comandos del dispositivo lo permita o consulte a Sentar por la sintaxis correcta.

## Por qué usar Plaspy con esta configuración

Configurar el Sentar D38 para que reporte a Plaspy centraliza la ubicación, eventos SOS y el estado del dispositivo en una única plataforma para monitoreo y respuesta. Para cuidadores y organizaciones enfocadas en la seguridad infantil, la combinación del posicionamiento multimodal del D38 y la visibilidad que ofrece Plaspy proporciona una forma práctica de rastrear dispositivos en tiempo real y revisar el historial cuando sea necesario.

Para obtener más información sobre Plaspy y cómo soporta dispositivos como el Sentar D38 visite https://www.plaspy.com. Para los comandos específicos más recientes, detalles de firmware e instrucciones del fabricante, verifique la información actual en el sitio de Sentar http://www.sentarsmart.com/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con el tiempo.
