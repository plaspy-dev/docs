---
slug: /tk_star/tk210/configuration
id: tk210-configuration
sidebar_label: Configuration
title: TK-Star - TK210 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar TK‑Star TK210 a Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración TK-Star TK210
  - Configuración TK210 en Plaspy
  - Configuración rastreador GPS TK-Star
  - Configuración del servidor TK210
  - Configuración plataforma GPS TK210
  - Integración Plaspy TK210
  - Configuración rastreador vehicular
  - Configuración GPS para motocicleta
  - Configuración rastreador para gestión de flotas
  - Instrucciones TK-Star TK210
---

# TK-Star - Configuración del TK210

Esta página describe el contexto público de configuración para utilizar el rastreador TK-Star TK210 con Plaspy. Resume los pasos prácticos y los ajustes de servidor necesarios para que el dispositivo informe ubicaciones y eventos a la plataforma Plaspy, y muestra ejemplos de comandos SMS que se documentan públicamente para el TK210.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK210 permite configuración por SMS en su documentación pública; los ejemplos siguientes muestran comandos SMS comunes y los marcadores que podrá necesitar adaptar según el APN y credenciales de su operador.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el TK210 para comunicarse de forma fiable con Plaspy, asegurando que las actualizaciones de ubicación y las notificaciones de eventos lleguen a la plataforma. La configuración normalmente incluye establecer el APN del dispositivo, apuntarlo al endpoint del servidor de Plaspy, seleccionar el transporte (si es requerido) y habilitar cargas periódicas o el modo GPRS.

- Configure el APN de datos móviles y, si corresponde, el usuario y contraseña del APN para que el rastreador use la red celular.
- Establezca la dirección del servidor GPRS para apuntar el TK210 al endpoint compartido de Plaspy y su puerto.
- Seleccione UDP o TCP en el dispositivo si el firmware exige elegir un transporte.
- Habilite intervalos de subida regulares para que el dispositivo envíe posición y eventos a Plaspy.
- Verifique que el dispositivo reporte a Plaspy y aparezca en la plataforma antes de la instalación definitiva.
- Utilice los comandos SMS documentados o la herramienta oficial de configuración de TK-Star proporcionada por el vendedor.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte soportado: UDP o TCP (el dispositivo puede configurarse para usar cualquiera)
- Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Dispositivo alimentado y accesible para la configuración (cableado de alimentación o fuente de banco).
- SIM activa con datos móviles habilitados y conocimiento del APN del operador.
- Capacidad para enviar SMS al rastreador si se usa configuración por SMS.
- Acceso a las instrucciones oficiales de configuración de TK-Star o al software del fabricante.
- Una cuenta o despliegue de Plaspy listo para aceptar conexiones de dispositivos y mostrar la telemetría entrante.
- Conocimiento básico de la contraseña del dispositivo; los ejemplos públicos para el TK210 usan 123456 como valor por defecto.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para reportar a Plaspy, el TK210 usa la red de datos celular para alcanzar el endpoint compartido de Plaspy (dominio y puerto). Plaspy ingiere mensajes GNSS, ubicación asistida y eventos, e identifica automáticamente el protocolo del rastreador para que los dispositivos aparezcan correctamente en la plataforma sin detalles de servidor por dispositivo.

- El dispositivo envía paquetes de posición a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las condiciones de la red.
- Alertas de movimiento, vibración y exceso de velocidad se reenvían a Plaspy como mensajes de evento.
- Eventos de entrada/salida de geocerca y acciones de inmovilizador remoto se reportan y controlan mediante los flujos de trabajo de Plaspy.
- Plaspy almacena rutas históricas y eventos para revisión posterior y análisis operativo.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de TK-Star para su dispositivo: utilice los comandos SMS del fabricante, la herramienta de escritorio o la aplicación del proveedor según la documentación del TK210.
2. Ingrese el endpoint del servidor de Plaspy estableciendo d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 como puerto de subida para Plaspy.
4. Seleccione UDP o TCP en el dispositivo si el firmware requiere una elección.
5. Configure los parámetros APN de la SIM instalada para que GPRS/4G esté disponible.
6. Aplique o guarde la configuración y cambie el dispositivo al modo GPRS/datos si es necesario.
7. Reinicie el dispositivo si el fabricante lo recomienda.
8. Valide que el dispositivo reporte a Plaspy y que posiciones y eventos aparezcan en la plataforma.

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración del TK210 muestran comandos SMS que se usan comúnmente para configurar el dispositivo. Los comandos siguientes preservan el orden y los marcadores que aparecen en las instrucciones públicas de TK-Star. La contraseña por defecto del dispositivo en estos ejemplos públicos es 123456. Reemplace marcadores como {{apn}}, {{apnu}} y {{apnp}} con los valores de su operador según corresponda.

- Restauración opcional a ajustes de fábrica inicial (usar solo cuando sea necesario como paso inicial)
```text
begin123456
```

- Establecer el APN del operador (reemplace {{apn}} por el APN de su operador)
```text
apn123456 {{apn}}
```

- Establecer el usuario del APN (usar si su operador requiere usuario; reemplace {{apnu}})
```text
apnuser123456 {{apnu}}
```

- Establecer la contraseña del APN (usar si su operador requiere contraseña; reemplace {{apnp}})
```text
apnpasswd123456 {{apnp}}
```

- Establecer el servidor GPRS a Plaspy (la IP y el puerto deben coincidir con los valores de Plaspy)
```text
adminip123456 54.85.159.138 8888
```

- Establecer el intervalo de subida de posición a 60 segundos
```text
upload123456 60
```

- Cambiar el dispositivo a modo GPRS para que use datos móviles para reportar
```text
gprs123456
```

Notas sobre los marcadores:
- {{apn}} — cadena APN de su operador móvil.
- {{apnu}} — usuario APN si lo requiere el operador.
- {{apnp}} — contraseña APN si lo requiere el operador.
- 123456 en estos ejemplos es la contraseña pública por defecto del dispositivo; reemplácela por la contraseña configurada si ya fue cambiada.

## Observaciones sobre la configuración

- Las revisiones de firmware y hardware pueden modificar los comandos SMS disponibles o la sintaxis exacta; siempre verifique con la documentación más reciente de TK-Star.
- La configuración por SMS es un método público común para el TK210, pero también pueden existir herramientas del proveedor o aplicaciones de configuración.
- Elija UDP o TCP según la fiabilidad de su red y las opciones del firmware del dispositivo; Plaspy acepta ambos y detectará automáticamente el protocolo.
- Se recomienda cambiar la contraseña del dispositivo desde el valor público por defecto en despliegues de producción para evitar reconfiguraciones no autorizadas.
- Los comandos SMS requieren saldo suficiente y formato correcto; los retrasos en la red pueden afectar la entrega de comandos.

## Por qué usar Plaspy con esta configuración

Usar el TK210 con Plaspy ofrece una solución práctica para el rastreo de motocicletas y vehículos ligeros, donde el tamaño compacto del equipo, las alertas antirrobo y la función de inmovilizador remoto resultan importantes. Con los comandos SMS públicos y los ajustes de servidor compartidos de Plaspy, los operadores pueden apuntar rápidamente los dispositivos TK210 a la plataforma Plaspy y comenzar a recopilar datos de ubicación y eventos en tiempo real para monitoreo, alertas e historial de rutas.

Learn more about Plaspy at https://www.plaspy.com and verify the latest TK-Star device-specific setup and firmware details at https://www.tk-star.com/. Manufacturer specifications and configuration methods can change over time, so confirm current instructions on the official TK-Star site when performing your final configuration.
