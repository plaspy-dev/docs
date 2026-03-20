---
slug: /v_sun/tlt_8a/configuration
id: tlt_8a-configuration
sidebar_label: Configuration
title: V-SUN - TLT-8A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del V-SUN TLT-8A con Plaspy, ajustes de servidor y comandos SMS para configurar GPRS
keywords:
  - Configuración V-SUN TLT-8A
  - Instalación V-SUN TLT-8A
  - Configuración de servidor V-SUN TLT-8A
  - Configuración rastreador GPS V-SUN
  - Configuración TLT-8A Plaspy
  - Configuración GPRS TLT-8A
  - Configuración rastreador Plaspy
  - Instalación de rastreador de vehículos
  - Configuración GPRS SMS para rastreador
  - Configuración de seguimiento de flotas
---

# V-SUN - Configuración TLT-8A

Esta página documenta el contexto público de configuración para usar el rastreador GPS/GSM V-SUN TLT-8A con la plataforma Plaspy. Reúne la información de instalación de acceso público y ejemplos de comandos SMS que se usan para apuntar el dispositivo a Plaspy, de modo que la ubicación y los datos del equipo se entreguen a la plataforma. Use esta guía para entender los ajustes comunes del servidor que Plaspy requiere y cómo esos valores se mapean al flujo de configuración del TLT-8A.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración en el lado del fabricante y la sintaxis exacta de los comandos pueden variar según la versión de firmware, la revisión de hardware, las preferencias del instalador y las herramientas del proveedor. El TLT-8A admite reportes por SMS y GPRS TCP y puede configurarse vía SMS como se muestra en los ejemplos públicos más abajo. Verifique siempre los detalles con la documentación actual del fabricante cuando sea necesario.

## Resumen de la configuración

Configurar el TLT-8A para Plaspy prepara el rastreador para enviar datos de posición y eventos al endpoint del servidor Plaspy, de modo que el dispositivo aparezca y reporte correctamente en la plataforma. El proceso normalmente establece el APN del equipo, la dirección y el puerto del servidor GPRS que usa Plaspy, y habilita los modos de reporte GPRS o las funciones de posicionamiento GPS.

- Configure el APN del dispositivo para que el rastreador pueda establecer una sesión de datos GPRS con la red móvil.
- Apunte el rastreador al servidor de Plaspy usando el endpoint compartido o la IP y el puerto de Plaspy.
- Seleccione UDP o TCP en el dispositivo si se requiere elegir el transporte.
- Habilite los modos de reporte GPRS o TCP para que el rastreador envíe actualizaciones de posición en vivo a Plaspy.
- Valide que el equipo se registre y envíe datos para que sea visible en la plataforma Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte: UDP o TCP pueden ser usados por el dispositivo al configurar la conexión  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta el protocolo automáticamente, por lo que es esencial configurar correctamente el host y el puerto del servidor.

## Requisitos habituales antes de configurar

- Un equipo TLT-8A instalado y con alimentación, con la antena GPS ubicada para permitir la recepción de satélites.  
- Una SIM GSM válida con datos habilitados y el APN correcto para el operador móvil.  
- Capacidad para enviar comandos SMS al dispositivo o acceso a la herramienta de configuración del fabricante si está disponible.  
- Conocimiento de la contraseña del dispositivo si fue cambiada desde el valor de fábrica. Los ejemplos públicos aquí usan la contraseña de fábrica 0000.  
- Un entorno de red que permita conexiones salientes hacia el endpoint del servidor Plaspy en el puerto especificado.  
- Acceso a la documentación oficial de V-SUN o a sus canales de soporte para detalles específicos de firmware.

## Cómo se conecta este rastreador a Plaspy

El TLT-8A puede reportar información de posición a Plaspy por GPRS usando una conexión TCP o UDP, o puede entregar actualizaciones de posición vía SMS según la configuración y las necesidades operativas. Cuando está configurado para reporte de datos, el dispositivo envía mensajes de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda procesar y mostrar la información.

- El rastreador se configura para reportar al endpoint d.plaspy.com o a la IP 54.85.159.138.  
- Los mensajes del dispositivo se envían al puerto 8888 que Plaspy utiliza para todos los equipos.  
- El dispositivo puede configurarse para usar transporte UDP o TCP según el firmware y la preferencia del instalador.  
- Plaspy detecta e interpreta automáticamente el protocolo del rastreador cuando el dispositivo se conecta.  
- Los datos reportados hacen que el equipo sea visible en Plaspy para seguimiento, alertas de eventos y reproducción histórica.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante para el TLT-8A, normalmente comandos SMS o una herramienta de configuración del proveedor.  
2. Configure el APN del equipo usando el APN del operador y, si corresponde, los campos de usuario y contraseña del APN.  
3. Ingrese el host del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138.  
4. Establezca el puerto del servidor en 8888.  
5. Elija UDP o TCP si el equipo exige una selección explícita del transporte.  
6. Aplique o guarde la configuración en el dispositivo según el método del fabricante.  
7. Reinicie el equipo si el firmware o la secuencia de configuración lo requieren.  
8. Verifique que el dispositivo reporte a Plaspy y sea visible en la plataforma, confirmando que los mensajes llegan y se analizan correctamente.

Si prefiere la configuración por SMS, siga la secuencia de comandos SMS del fabricante (a continuación hay comandos de ejemplo) y luego confirme que el dispositivo establece una sesión GPRS y envía al servidor Plaspy.

## Comandos de configuración de ejemplo

El TLT-8A admite configuración mediante comandos SMS. Los comandos de ejemplo públicos abajo usan la contraseña de fábrica 0000. Envíe cada comando como un SMS al número del dispositivo. Reemplace los marcadores y valores según corresponda para su instalación.

Nota: Si la contraseña del dispositivo se cambió desde la configuración de fábrica, use la contraseña actual en lugar de 0000.

1. Reinicio opcional a valores de fábrica (usar solo cuando sea necesario)
```text
*RESET#0000##
```

2. Establecer el APN del operador (reemplazar marcadores según sea necesario)
```text
#803#0000#[apn]#[apnu]#[apnp]##
```
- [apn] = APN de su operador móvil  
- [apnu] = usuario del APN si lo requiere el operador (dejar en blanco o eliminar si no se requiere)  
- [apnp] = contraseña del APN si lo requiere el operador (dejar en blanco o eliminar si no se requiere)

3. Establecer el servidor GPRS a Plaspy usando la IP y el puerto de Plaspy
```text
#804#0000#54.85.159.138#8888##
```
También puede usar el dominio d.plaspy.com en dispositivos que acepten nombres de host en lugar de la IP.

4. Establecer el intervalo de actualización en movimiento (ejemplo)
```text
#805#0000#120#1##
```

5. Establecer el intervalo de actualización estático (ejemplo)
```text
#809#0000#120#1##
```

6. Habilitar modo GPRS
```text
7100000
```

7. Habilitar modo GPS
```text
2220000
```

Envíe estos comandos en el orden mostrado cuando el orden sea importante para una configuración inicial limpia. Ajuste los tiempos y parámetros según sus requisitos operativos. Si un comando devuelve un SMS de reconocimiento, confirme el éxito antes de continuar.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la sintaxis exacta de los comandos o las opciones disponibles; consulte la documentación de V-SUN para guías específicas por firmware.  
- El TLT-8A admite reportes por SMS y GPRS TCP; los comandos SMS se usan comúnmente para configuración remota cuando no hay una herramienta de configuración disponible.  
- Elija UDP o TCP según el entorno de red y el soporte del firmware; Plaspy acepta ambos y detecta automáticamente el protocolo del rastreador.  
- Plaspy utiliza el puerto 8888 para todos los dispositivos, así que asegúrese de que el host y puerto del servidor estén configurados con los valores de Plaspy durante la instalación.  
- Mantenga control de la contraseña del dispositivo y cámbiela solo si puede actualizar todos los comandos posteriores con la nueva contraseña.

## Por qué usar Plaspy con esta configuración

Usar el V-SUN TLT-8A con Plaspy ofrece una vía sencilla para integrar posiciones GPS y datos de eventos en una plataforma de seguimiento de flotas que maneja automáticamente la detección de protocolos de los rastreadores. Para organizaciones que requieren visibilidad de vehículos, reportes de movimiento y monitoreo de eventos, configurar el TLT-8A para reportar a Plaspy alinea el dispositivo con un endpoint y puerto consistentes para que los equipos aparezcan y reporten de forma confiable.

Para más información sobre Plaspy y cómo se integra con rastreadores como el V-SUN TLT-8A visite https://www.plaspy.com. Los métodos de configuración específicos de los dispositivos, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar las instrucciones de instalación más recientes en el sitio oficial de V-SUN http://www.v-sun.cc/ antes de realizar despliegues en producción.
