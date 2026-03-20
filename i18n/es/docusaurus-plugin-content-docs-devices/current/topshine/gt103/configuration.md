---
slug: /topshine/gt103/configuration
id: gt103-configuration
sidebar_label: Configuration
title: TopShine - GT103 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopShine GT103 con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - configuración TopShine GT103
  - configuración GT103 para Plaspy
  - configuración del rastreador TopShine
  - configuración de servidor GT103
  - configuración rastreador GPS GT103
  - configuración de dispositivo Plaspy
  - configuración de seguimiento vehicular GT103
  - comandos SMS TopShine GT103
  - configuración GT103 para gestión de flotas
  - configuración de plataforma de rastreo GT103
---

# TopShine — Configuración GT103

Esta página ofrece contexto público de configuración para usar el rastreador TopShine GT103 con la plataforma Plaspy. Reúne los ajustes de servidor prácticos y ejemplos de comandos que se emplean comúnmente para apuntar un GT103 a Plaspy, y explica qué verificar antes de integrar dispositivos en su cuenta de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GT103 soporta 2G GPRS con SMS como respaldo y puede configurarse por SMS o mediante herramientas del fabricante; los ejemplos a continuación muestran comandos SMS que se usan de forma pública para la configuración inicial.

## Visión general de la configuración

Preparar un GT103 para su uso con Plaspy implica asegurarse de que el dispositivo pueda alcanzar el endpoint del servidor de Plaspy a través de GPRS y que la identidad básica del equipo y los ajustes del APN estén correctamente configurados. El objetivo es una entrega de datos confiable, la identificación correcta del dispositivo en Plaspy y la visibilidad de la telemetría en el panel de Plaspy.

- Configure el GT103 para enviar datos GPRS al endpoint del servidor Plaspy para que la ubicación y las alarmas lleguen en tiempo real.
- Establezca el identificador del dispositivo y confirme el mapeo del IMEI para que Plaspy reconozca el rastreador.
- Ingrese los datos del APN del operador móvil para habilitar la conectividad GPRS.
- Valide la configuración de transporte (UDP o TCP) y el puerto compartido que usa Plaspy para que los datos lleguen a la plataforma.
- Verifique los reportes comprobando la telemetría del dispositivo en Plaspy y confirmando eventos esperados como ACC, SOS y alertas de geocerca.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Estos valores exactos se requieren al configurar el GT103 para que reporte a Plaspy. Use el dominio d.plaspy.com o la IP 54.85.159.138 y configure el puerto del dispositivo en 8888. Si el firmware del GT103 solicita el transporte, elija UDP o TCP según las opciones del equipo.

## Requisitos típicos antes de la configuración

- Alimentación estable al GT103 y cableado adecuado según su instalación.
- Una tarjeta SIM 2G con capacidad GPRS, datos habilitados y soporte SMS si va a usar configuración por SMS.
- Los ajustes de APN correctos proporcionados por el operador móvil para la conectividad GPRS.
- Acceso al IMEI del dispositivo y capacidad para enviar comandos SMS o usar la herramienta de configuración del fabricante.
- Conocer la contraseña del dispositivo cuando sea requerida para comandos SMS; la contraseña pública por defecto que usan los ejemplos es 000000.
- Acceso a la documentación oficial de TopShine o herramientas de instalador para guías específicas del dispositivo y actualizaciones de firmware.

## Cómo se conecta este rastreador a Plaspy

El GT103 envía mensajes de posición y estado por 2G GPRS al endpoint y puerto compartido de Plaspy para que la plataforma pueda ingerir la telemetría, mostrar la ubicación en los mapas y generar alertas. Plaspy utiliza el mismo puerto para todos los dispositivos y selecciona automáticamente el protocolo correcto cuando llegan los datos.

- Los paquetes GPRS del equipo se dirigen a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador para interpretar los mensajes del GT103.
- Ubicación, estado de ACC/ignición, alarmas SOS, geocercas y eventos de exceso de velocidad serán visibles en Plaspy cuando el dispositivo reporte correctamente.
- La identidad del dispositivo se establece mediante IMEI o ID configurado para asociar la telemetría con el activo correcto.
- Si falla el GPRS, el GT103 puede usar SMS como respaldo para algunos mensajes y comandos remotos.

## Flujo típico de configuración

1. Acceda al método oficial de configuración TopShine para GT103, normalmente comandos SMS o la herramienta del proveedor, y confirme la contraseña del dispositivo si se requiere.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP alternativa 54.85.159.138 en la configuración de servidor del dispositivo.
3. Configure el puerto del servidor en 8888, que Plaspy usa para todos los dispositivos.
4. Elija la opción de transporte UDP o TCP si el firmware del equipo solicita selección de transporte.
5. Configure el APN del operador y cualquier nombre de usuario y contraseña de APN opcionales requeridos por su SIM.
6. Aplique o guarde la configuración y reinicie el dispositivo si el equipo o el firmware requieren reinicio para aplicar cambios.
7. Valide que el dispositivo reporte a Plaspy verificando el estado del equipo y la telemetría reciente en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El GT103 admite configuración basada en SMS. Los comandos SMS públicos que aparecen a continuación se presentan en el orden en que se usan comúnmente. La contraseña SMS del dispositivo en estos ejemplos es la predeterminada de fábrica 000000. Reemplace los marcadores de posición como [apn], [apnu], [apnp] y fragmentos de IMEI según necesite para su instalación.

- Restablecer el dispositivo a valores de fábrica (paso inicial opcional):
```text
W000000,990,099###
```

- Establecer el ID del dispositivo usando los primeros 14 dígitos del IMEI (ejemplo TopShine). Tenga en cuenta que Plaspy usa el IMEI para la identificación del dispositivo; siga la instrucción del fabricante para mapear el ID al IMEI según se requiera:
```text
W000000,010,[IMIE_FIRST_14_DIGITS]
```
Explicación: reemplace [IMIE_FIRST_14_DIGITS] con los primeros 14 dígitos del IMEI del dispositivo. El mapeo exacto del ID puede variar según el despliegue.

- Establecer el APN del operador. Mantenga los marcadores si su APN requiere usuario o contraseña:
```text
W000000,011,[apn]{{,[apnu],[apnp]}}
```
Explicación: [apn] es el APN proporcionado por su operador móvil. Si el operador requiere usuario y contraseña del APN, incluya [apnu] y [apnp] respectivamente. Si no son necesarios, envíe solo el APN.

- Configurar el servidor GPRS hacia Plaspy usando la IP del servidor Plaspy y el puerto 8888:
```text
W000000,012,54.85.159.138,8888
```
Alternativa: use d.plaspy.com en lugar de la IP si el dispositivo soporta nombre de dominio para la configuración del servidor.

- Cambiar el modo a datos GPRS (valor de ejemplo 2 para modo GPRS):
```text
W000000,013,2
```

- Establecer el intervalo de actualización de reportes (ejemplo usa valor 6 en documentación pública):
```text
W000000,014,6
```

- Recuperar el IMEI del dispositivo para verificación:
```text
W000000,601
```

Notas sobre marcadores y valores por defecto:
- La contraseña SMS por defecto mostrada en ejemplos públicos es 000000. Si la contraseña de su dispositivo fue cambiada, use la contraseña activa en lugar de 000000.
- Mantenga marcadores como [apn], [apnu] y [apnp] al preparar mensajes SMS para recordar qué valores del operador son necesarios.
- Si su dispositivo admite el uso de nombre de dominio, puede establecer d.plaspy.com en lugar de la dirección IP.

## Observaciones sobre la configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar el formato de comandos y las opciones disponibles; siempre verifique contra la versión específica de firmware de su GT103.
- El GT103 soporta tanto configuración por SMS como por GPRS en la documentación pública; use el método que mejor se adapte a su despliegue y flujo de trabajo del instalador.
- Elija TCP o UDP según las opciones del firmware del dispositivo; Plaspy detectará automáticamente el protocolo del rastreador una vez que los datos lleguen a la plataforma.
- Use el puerto compartido de Plaspy 8888 para todas las entradas de dispositivos — Plaspy espera dispositivos en ese puerto y aceptará conexiones de cualquier rastreador compatible usando ese puerto.
- Las credenciales del APN son específicas del operador. Si se requiere usuario o contraseña para el APN, incluya [apnu] y [apnp] al configurar el APN.

## Por qué usar Plaspy con esta configuración

Usar el GT103 con Plaspy ofrece una forma práctica de centralizar el seguimiento de flotas y los procesos anti robo. Cuando el GT103 está configurado para reportar a Plaspy, los gestores de flota obtienen visibilidad de la ubicación, estado de ignición, eventos SOS y otras alarmas desde una única plataforma, lo que permite una respuesta más rápida ante incidentes y una supervisión sencilla.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Tenga en cuenta que los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; siempre verifique las instrucciones de instalación más recientes y la información de firmware con el fabricante en https://www.gztopshine.com/ antes de desplegar dispositivos.
