---
slug: /coban/gps303/configuration
id: gps303-configuration
sidebar_label: Configuration
title: Coban - GPS303 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Coban GPS303 para apuntarlo a Plaspy mediante GPRS y comandos SMS
keywords:
  - configuración Coban GPS303
  - instalación Coban GPS303
  - configuración GPS303 Plaspy
  - configuración rastreador Coban
  - configuración servidor GPS303
  - comandos SMS GPS303
  - configuración seguimiento vehicular
  - configuración GPRS rastreador
  - seguimiento de flotas Plaspy
  - configuración plataforma GPS
---

# Coban - Configuración del GPS303

Esta página explica el contexto público de configuración para usar el Coban GPS303 con Plaspy. Describe los ajustes de servidor prácticos y el flujo de configuración habitual para apuntar un dispositivo GPS303 a Plaspy, de modo que el rastreador pueda reportar posición y estado a la plataforma. Las indicaciones aquí se basan en comandos públicos y en los ajustes compartidos del servidor Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración del fabricante pueden variar según versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor; por eso los ejemplos muestran comandos SMS comunes y flujos de configuración usados con el GPS303, destacando los valores de servidor de Plaspy que debe aplicar.

## Resumen de la configuración

El objetivo es preparar el GPS303 para comunicarse de forma confiable con Plaspy, de modo que el dispositivo aparezca en la plataforma y envíe actualizaciones periódicas de posición. La configuración típica usa la interfaz de comandos SMS del equipo para establecer APN y datos del servidor, activar el modo GPRS y verificar el reporte.

- Configure las credenciales APN para que el dispositivo use datos móviles y se conecte a Plaspy
- Apunte el dispositivo al endpoint y puerto del servidor de Plaspy
- Elija UDP o TCP según las opciones del rastreador y los requerimientos de red
- Habilite el envío periódico de posiciones y cualquier opción de sensores o protocolo necesaria para el monitoreo
- Valide la conectividad y confirme que el dispositivo reporte a Plaspy

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes del servidor Plaspy al configurar el GPS303. Estos valores son obligatorios y coherentes para los dispositivos compatibles con Plaspy.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP (el dispositivo puede permitir seleccionar cualquiera)
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se usa un único puerto para todos los dispositivos

## Requisitos habituales antes de la configuración

- Una tarjeta SIM activa con datos habilitados y el APN de su operador móvil
- Capacidad para enviar comandos SMS al GPS303 para la configuración (el dispositivo soporta configuración vía SMS)
- Dispositivo con alimentación y accesible para aplicar ajustes GPRS y conectar
- Conocimiento de la contraseña del equipo (la contraseña por defecto usada en los ejemplos es 123456)
- Acceso a la documentación oficial de Coban o herramientas de configuración para instrucciones específicas de firmware
- Condiciones de red que permitan conexiones salientes UDP/TCP al servidor Plaspy

## Cómo se conecta este rastreador a Plaspy

Si se configura correctamente, el GPS303 enviará datos de ubicación y estado al endpoint de Plaspy, de modo que el equipo sea visible y monitoreado dentro de la plataforma. Plaspy recibe la telemetría y la pone a disposición para seguimiento, alertas y reportes.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy
- Los datos se envían por GPRS (datos móviles) usando transporte UDP o TCP según se seleccione
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes
- Actualizaciones de posición, alarmas y eventos de sensores se reenvían a Plaspy para su visualización y alertas
- La validación de conectividad confirma que el dispositivo está reportando activamente a Plaspy

## Flujo de configuración habitual

Siga estos pasos públicos y prácticos para configurar un GPS303 con Plaspy:

1. Acceda al método oficial de configuración Coban para su equipo, normalmente mediante comandos SMS o una herramienta del fabricante, y verifique la contraseña del dispositivo.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en el paso de configuración del servidor.
3. Establezca el puerto a 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Seleccione UDP o TCP si el GPS303 requiere elegir un modo de transporte.
5. Configure el APN y las credenciales APN de la SIM para que se pueda establecer GPRS.
6. Aplique o guarde la configuración y reinicie el rastreador si el equipo lo requiere.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma.

## Comandos de configuración de ejemplo

El GPS303 puede configurarse usando comandos SMS. Los ejemplos siguientes son comandos públicos de muestra. La contraseña por defecto del dispositivo utilizada en estos comandos es 123456. Mantenga los marcadores de posición tal y como se muestran al reemplazarlos por los valores de su operador.

- Restauración de fábrica (opcional en la configuración inicial)
```text
begin123456
```

- Establecer zona horaria a UTC+0
```text
time zone123456 0
```

- Configurar el APN del operador (reemplace [apn] por el APN de su operador)
```text
apn123456 [apn]
```

- Configurar usuario y contraseña del APN (reemplace [apnu] y [apnp] según sea necesario)
```text
up123456 [apnu] [apnp]
```

- Establecer el servidor GPRS con la IP y el puerto de Plaspy
```text
adminip123456 54.85.159.138 8888
```
Nota: Si el firmware del GPS303 soporta nombres de dominio, puede usar alternativamente d.plaspy.com en un campo de servidor o en la herramienta del fabricante cuando esté disponible.

- Establecer intervalo de actualización para posiciones periódicas (se muestra un formato de ejemplo)
```text
fix060s060s***n123456
```

- Cambiar el dispositivo a modo GPRS y seleccionar transporte
```text
gprs123456,1,1
```
Comando alternativo más simple (dependiente del firmware del equipo):
```text
gprs123456
```

- Verificar configuración actual
```text
check123456
```

- Habilitar opciones de protocolo extendido como sensor de combustible o reporte mejorado de sensores digitales
```text
protocol123456 18
```

Explicación de marcadores de posición:
- [apn] — nombre del APN de su operador móvil
- [apnu] — usuario del APN si el operador lo requiere
- [apnp] — contraseña del APN si el operador lo requiere

Use el comando check123456 para verificar los ajustes después de aplicarlos. Si realiza un restablecimiento de fábrica con begin123456, considérelo como un paso opcional inicial para restaurar los valores por defecto.

## Notas de configuración

- Las versiones de firmware y de hardware pueden cambiar la sintaxis de los comandos y las opciones disponibles; confirme siempre los comandos con el manual del equipo correspondiente a su unidad.
- La configuración vía SMS es de uso común en dispositivos GPS303; algunos instaladores pueden preferir una herramienta de configuración o interfaz USB/serie si el equipo o el mercado local lo soporta.
- La selección TCP vs UDP afecta el comportamiento de entrega y debe elegirse según la fiabilidad de la red y las recomendaciones del proveedor; Plaspy acepta ambos en el mismo puerto.
- Mantenga segura la contraseña del equipo y cámbiela respecto al valor por defecto si las políticas operativas lo requieren.
- Use el comando check para validar que APN, servidor y ajustes de protocolo se hayan aplicado correctamente.

## Por qué usar Plaspy con esta configuración

Usar el Coban GPS303 con Plaspy ofrece a las organizaciones una forma sencilla de recopilar datos de ubicación y estado de activos distribuidos sobre la red GSM/GPRS existente. Los ajustes de servidor compartidos de Plaspy y la detección automática de protocolos reducen la complejidad de configuración por dispositivo y facilitan poner en línea múltiples equipos para monitoreo, alertas y reportes.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los comandos específicos más recientes del dispositivo, notas de firmware y detalles del fabricante, verifique la documentación oficial de Coban en https://www.coban.net/ ya que los métodos de configuración y el comportamiento del equipo pueden cambiar con el tiempo.
