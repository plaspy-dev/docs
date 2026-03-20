---
slug: /globalsat/lt_20/configuration
id: lt_20-configuration
sidebar_label: Configuration
title: GlobalSat - LT-20 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar GlobalSat LT-20 a Plaspy con ejemplos de SMS y ajustes de servidor
keywords:
  - Configuración GlobalSat LT-20
  - Instalación GlobalSat LT-20
  - rastreador GlobalSat Plaspy
  - LT-20 configuración Plaspy
  - configuración rastreador GPS
  - configuración seguimiento de activos
  - configuración GPS LoRa
  - configuración SMS del rastreador
  - configuración de servidor del rastreador
  - plataforma de monitoreo de activos
---

# GlobalSat - LT-20: Configuración

Esta página documenta el contexto público de configuración para usar el GlobalSat LT-20 con la plataforma de seguimiento Plaspy. Consolida los ajustes del servidor Plaspy, el flujo práctico de configuración y los comandos SMS públicos que se usan comúnmente para apuntar un dispositivo LT-20 compatible a Plaspy y habilitar su reporte y visibilidad.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración del proveedor. La configuración del modelo LT-20 que aquí se muestra incluye ejemplos de comandos SMS extraídos de contenido público y explica marcadores de posición como IMEI y variables APN.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el LT-20 para que pueda comunicarse con Plaspy, enviar datos de ubicación y eventos, y aparecer en la plataforma Plaspy con la mínima intervención manual. Cuando esté correctamente configurado, el dispositivo enviará su telemetría al endpoint compartido de Plaspy y la detección de protocolo de Plaspy lo reconocerá automáticamente.

- Rellenar los identificadores del dispositivo y los parámetros de red para que el rastreador alcance el endpoint de Plaspy
- Enviar o aplicar el dominio o IP del servidor y el puerto de Plaspy en la configuración del dispositivo
- Verificar la conectividad y que el rastreador reporte a Plaspy para obtener visibilidad inmediata
- Usar las plantillas de comandos SMS proporcionadas para configurar dispositivos de forma remota cuando el equipo soporte configuración por SMS
- Reiniciar el rastreador después de aplicar cambios y validar el reporte en Plaspy

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para conexiones entrantes
- Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo cual simplifica la configuración

## Requisitos habituales antes de configurar

- Acceso al número IMEI del dispositivo para completar el marcador [imei] en los comandos de configuración
- Un método para enviar comandos de configuración al rastreador, como SMS o la herramienta del fabricante si está disponible
- Datos APN válidos para la SIM usada en el dispositivo cuando se requiera configuración celular; los ejemplos incluyen marcadores de posición
- Dispositivo con batería cargada o fuente de energía suficiente durante la configuración y verificación
- Acceso a los ajustes del servidor Plaspy mostrados arriba para ingresarlos en la configuración del rastreador
- Permiso para reiniciar el dispositivo si es necesario aplicar cambios mediante un reinicio

## Cómo se conecta este rastreador a Plaspy

El LT-20 se configura para reportar al endpoint compartido y puerto de Plaspy, de modo que Plaspy pueda recibir telemetría e identificar automáticamente el protocolo del rastreador. Una vez establecida la comunicación, los mensajes de ubicación y eventos del dispositivo serán visibles en la plataforma Plaspy.

- Configure el dispositivo para usar d.plaspy.com o la IP 54.85.159.138 como servidor destino
- Use el puerto 8888 como puerto de destino para los datos del rastreador
- Seleccione UDP o TCP si el equipo requiere especificar el modo de transporte
- El dispositivo enviará reportes periódicos y por eventos al endpoint de Plaspy
- Plaspy detecta el protocolo entrante automáticamente y comienza a procesar los mensajes del dispositivo

## Flujo típico de configuración

1. Acceda al método oficial de configuración GlobalSat para el LT-20, como el esquema de comandos SMS del fabricante o el software de configuración del proveedor
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o 54.85.159.138 en el campo de servidor del dispositivo
3. Ajuste el puerto de destino a 8888, que se usa en los dispositivos soportados por Plaspy
4. Elija el modo de transporte UDP o TCP si el dispositivo requiere una selección explícita
5. Envíe o aplique la configuración y guarde los cambios en el dispositivo
6. Reinicie o rebootee el rastreador si es necesario para aplicar los ajustes
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma

## Ejemplos de comandos de configuración

El contenido público de configuración del LT-20 incluye plantillas de comandos SMS. Preserve los marcadores de posición y reemplácelos con los valores específicos del dispositivo al enviar comandos. La secuencia de comandos que se muestra a continuación indica el mensaje de configuración y un comando de reinicio opcional. Mantenga el orden: configure primero y luego reinicie si desea que el dispositivo recargue inmediatamente los ajustes.

- Nota de formato de ejemplo presente en el contenido público
  - TSPRXAB27GHKLMnaicz*U!

- Plantilla de comando de configuración
  - Propósito: configurar APN, IP y puerto del servidor Plaspy, y banderas básicas de reporte
  - Reemplace [imei] por el IMEI del dispositivo
  - Reemplace [apn], [apnu] y [apnp] con el nombre APN del operador, usuario y contraseña según corresponda
  - Calcule [checksum] como se describe abajo e insértelo en forma hexadecial mayúscula

```text
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```

- Plantilla de comando de reinicio
  - Propósito: reiniciar el dispositivo para aplicar la configuración. Use solo si se requiere o recomienda reiniciar.

```text
GSC,[imei],3,0,LH*[checksumreeboot]!
```

Cálculo del checksum
- El contenido público incluye un cálculo de checksum que aplica XOR a todos los caracteres de la cadena del comando hasta, pero sin incluir, el carácter asterisco
- Convierta el resultado XOR a una cadena hexadecimal de dos dígitos en mayúsculas y use ese valor como [checksum] o [checksumreeboot]
- Pasos para calcular el checksum en breve
  1. Tome la porción del texto del comando antes del asterisco, por ejemplo GSS,[imei],3,0,...,A1=1
  2. Calcule el XOR bit a bit de los códigos de carácter de cada carácter en esa cadena
  3. Convierta el valor XOR final a un valor hexadecimal de dos caracteres en mayúsculas, rellene con cero a la izquierda si es necesario
  4. Coloque ese valor hex después del asterisco y antes del signo de exclamación final

Explicación de marcadores de posición
- [imei] número IMEI del dispositivo para identificar el rastreador específico
- [apn] nombre APN del operador necesario para datos celulares
- [apnu] usuario del APN si aplica
- [apnp] contraseña del APN si aplica
- [checksum] y [checksumreeboot] calculados según lo descrito arriba

## Notas de configuración

- Los comandos públicos mostrados usan configuración por SMS, apropiada cuando el fabricante expone control SMS para el modelo LT-20
- Las revisiones de firmware y hardware pueden cambiar el formato de comandos o las reglas del checksum, por lo que debe verificar con la documentación actual de GlobalSat
- Elija UDP o TCP según el requerimiento del dispositivo y las condiciones de red; Plaspy aceptará cualquiera en el puerto 8888
- Plaspy utiliza el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador después de recibir los primeros mensajes
- Si usa parámetros APN móviles, mantenga los marcadores y credenciales seguros y verifique la configuración del operador antes de enviar comandos

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el GlobalSat LT-20 permite a las organizaciones consolidar los reportes de dispositivos en un único endpoint y puerto conocidos, lo que simplifica despliegues a gran escala y la configuración remota. La detección automática de protocolos de Plaspy elimina un paso de selección de protocolo cuando los dispositivos comienzan a reportar, ayudando a poner los equipos en línea más rápido para el monitoreo operacional.

Para obtener más información sobre Plaspy y cómo encaja esta configuración en la plataforma, visite https://www.plaspy.com. Para los comandos específicos más actuales, notas de firmware y guías de instalación, verifique siempre la información más reciente con el fabricante en https://www.globalsat.com.tw/.
