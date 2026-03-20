---
slug: /tzone/tz_avl10/configuration
id: tz_avl10-configuration
sidebar_label: Configuration
title: TZone - TZ-AVL10 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el TZone TZ-AVL10 para Plaspy con comandos SMS públicos, ajustes GPRS y datos de servidor para integración rápida
keywords:
  - Configuración TZone TZ-AVL10
  - Configuración TZ-AVL10
  - Rastreador GPS TZone Plaspy
  - Configuración servidor TZ-AVL10
  - Configuración SMS TZ-AVL10
  - Configuración GPRS TZ-AVL10
  - Configuración dispositivo Plaspy
  - Configuración seguimiento de vehículos TZone
  - Configuración software rastreo TZ-AVL10
  - Configuración plataforma GPS TZone
---

# TZone - Configuración del TZ-AVL10

Esta página describe el contexto de configuración pública para usar el rastreador GPS TZone TZ-AVL10 con la plataforma Plaspy. Reúne los ajustes públicos prácticos y ejemplos de comandos SMS necesarios para apuntar un equipo TZ-AVL10 a Plaspy, de modo que la unidad informe ubicación y eventos básicos a su cuenta Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TZ-AVL10 admite configuración por GPRS (TCP o UDP) y por SMS; esta página incluye ejemplos públicos de comandos SMS para establecer el APN, el intervalo de reporte, la dirección y puerto del servidor, y para activar el modo GPRS.

## Resumen de la configuración

El objetivo de este proceso es preparar el TZ-AVL10 para que se comunique de forma fiable con Plaspy y sea visible en su entorno de monitoreo de flota. Usando los comandos SMS públicos proporcionados por el fabricante, usted configura el APN del operador móvil, la temporización de reportes y el endpoint del servidor Plaspy, y luego habilita el GPRS para que el rastreador envíe datos.

- Configure el APN del operador para que el dispositivo establezca datos GPRS con el proveedor celular usando marcadores cuando sea necesario
- Ajuste el intervalo de carga para que el rastreador reporte actualizaciones con la frecuencia requerida
- Apunte el dispositivo al endpoint y puerto del servidor Plaspy para que los datos lleguen a Plaspy
- Active el modo GPRS para que el rastreador transmita por datos móviles en lugar de solo SMS
- Valide la conectividad para confirmar que el dispositivo aparece y reporta en la plataforma Plaspy

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Asegúrese de que el rastreador tenga energía y una batería interna cargada o alimentación externa según sea necesario para la configuración inicial
- Una tarjeta SIM operativa con un plan de datos activo y GPRS habilitado en la red objetivo
- Conocimiento del APN del operador móvil y, si procede, del usuario y contraseña del APN
- Acceso al método de configuración por SMS del TZ-AVL10 o a la herramienta oficial de TZone proporcionada por el vendedor
- Un teléfono capaz de enviar SMS al dispositivo para aplicar los comandos
- Confirmación de la contraseña SMS del dispositivo si difiere del ejemplo público mostrado en los comandos

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el TZ-AVL10 usa GPRS para abrir una sesión de datos con la plataforma y envía datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe estos uplinks e identifica automáticamente el protocolo del rastreador para que el dispositivo pueda aparecer en la plataforma sin selección manual por dispositivo.

- El equipo se configura para reportar al dominio o IP del servidor Plaspy en el puerto compartido
- Los datos se envían por GPRS usando UDP o TCP según su elección
- Plaspy detecta automáticamente el protocolo entrante del rastreador y procesa las actualizaciones de ubicación
- El rastreador puede enviar actualizaciones periódicas de ubicación y mensajes basados en eventos una vez que el GPRS está activo
- La visibilidad en la plataforma se valida cuando el dispositivo aparece por primera vez en Plaspy tras la configuración exitosa

## Flujo de configuración habitual

1. Acceda al método de configuración oficial del fabricante TZone o a la documentación de comandos SMS suministrada con el TZ-AVL10
2. Introduzca el nombre de host del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en los ajustes de servidor del dispositivo
3. Establezca el puerto en 8888, que Plaspy usa para todos los dispositivos admitidos
4. Elija UDP o TCP si el dispositivo requiere selección de transporte para GPRS
5. Aplique o guarde la configuración usando los comandos SMS de TZone o la herramienta del fabricante
6. Reinicie el dispositivo si el firmware lo requiere o después de guardar los ajustes
7. Verifique que el dispositivo reporte a Plaspy comprobando la visibilidad del dispositivo y la telemetría inicial en su cuenta Plaspy

## Comandos de configuración de ejemplo

Para configurar el TZ-AVL10 usando comandos SMS públicos, envíe los siguientes mensajes desde un teléfono al rastreador. Estos comandos siguen el patrón publicado públicamente para el equipo. El ejemplo usa la contraseña SMS pública mostrada (*000000); si su equipo usa una contraseña diferente, reemplace *000000 por su contraseña de dispositivo.

1. Configure el APN del operador. Use {{apn}} y los marcadores opcionales {{apnu}} y {{apnp}} para usuario y contraseña del APN cuando sean necesarios. Formato ejemplo:

```
*000000,011,{{apn}}{{# if apnu or apnp }},{{apnu}},{{apnp}}{{# end }}#
```

(Reemplace los valores marcadores con el APN de su operador. Si no se requieren usuario o contraseña, omita esos campos.)

2. Establezca el intervalo de actualización a 60 segundos:

```
*000000,018,60,999#
```

3. Configure el servidor GPRS con la IP y el puerto de Plaspy. Puede usar la IP o el nombre de host según lo permita el dispositivo:

```
*000000,015,0,54.85.159.138,8888#
```

4. Active el modo GPRS para permitir el reporte por datos:

```
*000000,016,1#
```

Notas sobre los comandos anteriores:
- Mantenga el orden de comandos según el ejemplo del fabricante: APN primero, parámetros de reporte a continuación, dirección del servidor y finalmente habilitar GPRS.
- Los marcadores como {{apn}}, {{apnu}} y {{apnp}} deben reemplazarse por los valores de su operador. Si su APN no requiere usuario o contraseña, dichos campos pueden omitirse como se muestra en el patrón público.
- Si prefiere usar el nombre de host en lugar de la IP para el servidor, establezca d.plaspy.com donde el dispositivo acepte hostnames en el comando de servidor.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar los formatos de comandos o los parámetros requeridos; siempre verifique la sintaxis exacta de comandos para el firmware de su dispositivo.
- La configuración basada en SMS es compatible con los ejemplos públicos del TZ-AVL10, lo que resulta útil para instalaciones de campo sin acceso directo a una herramienta de configuración.
- Elija UDP o TCP según la fiabilidad de su red y el comportamiento del proveedor; Plaspy acepta ambos en el puerto compartido.
- Use los valores de servidor públicos d.plaspy.com o 54.85.159.138 y el puerto 8888 como destino para todos los dispositivos gestionados por Plaspy.
- Las prácticas de instalación pueden variar según el mercado y el software incluido por el proveedor, por lo que confirme cualquier envoltura o herramienta específica del vendedor antes de un despliegue masivo.

## Por qué usar Plaspy con esta configuración

Usar el TZ-AVL10 con Plaspy ofrece un camino directo para integrar el reporte de GPS y eventos en una sola plataforma de visibilidad de flota. Los comandos SMS públicos permiten que los instaladores provisionen rápidamente el APN, los intervalos de reporte y el endpoint del servidor Plaspy para que los dispositivos comiencen a reportar con configuración mínima en sitio. La detección automática de protocolos de Plaspy reduce la necesidad de seleccionar el protocolo por dispositivo y facilita despliegues con múltiples modelos.

Para obtener más información sobre Plaspy y cómo puede gestionar dispositivos como el TZ-AVL10 visite https://www.plaspy.com. Para detalles actualizados específicos del dispositivo, notas de firmware y documentación oficial de comandos, verifique la información con el fabricante en http://www.tzonedigital.com/ ya que las especificaciones del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.
