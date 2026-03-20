---
slug: /coban/bn_408b/configuration
id: bn_408b-configuration
sidebar_label: Configuration
title: Coban - BN-408B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Coban BN-408B con ajustes de servidor Plaspy y pasos prácticos por SMS
keywords:
  - Coban BN-408B configuración
  - Configuración BN-408B
  - Rastreador Coban Plaspy
  - Configuración servidor BN-408B
  - Comandos SMS BN-408B
  - Configuración GPS Plaspy
  - Ajuste seguimiento BN-408B
  - Seguimiento vehicular BN-408B
  - Rastreador de activos BN-408B
  - Configuración rastreador Plaspy
---

# Coban - Configuración BN-408B

Esta página describe el contexto de configuración pública para usar el rastreador Coban BN-408B con Plaspy. Reúne los comandos SMS publicados por el fabricante y los ajustes de servidor compartidos que deberá aplicar para apuntar el dispositivo a Plaspy y habilitar el seguimiento en tiempo real y el reporte de alarmas.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el equipo fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor. El BN-408B soporta reportes por TCP, UDP y SMS; los ejemplos de comandos por SMS que siguen reflejan los métodos públicos de configuración más comunes para este modelo.

## Resumen de la configuración

El objetivo de este proceso es preparar el BN-408B para que reporte de forma fiable la posición y los eventos de alarma a la plataforma Plaspy usando el endpoint y puerto compartidos. Para unidades BN-408B el fabricante proporciona comandos SMS como un método práctico in situ cuando la configuración remota por GPRS aún no está disponible.

- Configure el APN y los ajustes GPRS del dispositivo para que permita el uso de datos móviles y alcance Plaspy.
- Apunte el rastreador al endpoint de servidor de Plaspy para que las posiciones y alarmas lleguen al receptor correcto.
- Seleccione el transporte (UDP o TCP) y ajuste el intervalo de reportes según sus necesidades.
- Verifique que el dispositivo reporte a Plaspy y compruebe alarmas como manipulación, batería baja y SOS en la plataforma.
- Guarde una copia de los comandos SMS y de la contraseña usada para la configuración para facilitar la resolución de problemas y futuros cambios.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP — el BN-408B puede configurarse para enviar datos por UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que todos los dispositivos usan el mismo puerto y la plataforma identifica el comportamiento del protocolo entrante

## Requisitos típicos antes de comenzar

- Un equipo BN-408B cargado y con la contraseña por defecto del fabricante disponible; la contraseña por defecto que aparece en los comandos públicos abajo es 123456
- Una SIM activa con plan de datos y las credenciales APN del operador correctas para acceso GPRS
- Acceso a la interfaz SMS del dispositivo o a la herramienta de configuración del fabricante para enviar los comandos
- Un teléfono capaz de enviar SMS al número del dispositivo, o un gateway SMS compatible cuando esté soportado
- El dispositivo instalado o colocado donde pueda obtener fijaciones GNSS y señal celular para validar la configuración

## Cómo se conecta este rastreador a Plaspy

El BN-408B envía actualizaciones periódicas de posición y mensajes de estado/alarma al endpoint y puerto del servidor Plaspy configurados en el equipo. Plaspy recibe esos mensajes por TCP o UDP y los convierte en posiciones, alarmas y eventos de plataforma visibles en su cuenta Plaspy.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- Las actualizaciones de posición, movimiento y telemetría de alarmas se envían por el transporte elegido (UDP o TCP).
- Plaspy detecta e interpreta automáticamente el protocolo del dispositivo para enrutar y decodificar la telemetría en la plataforma.
- Alarmas como manipulación, batería baja, movimiento y SOS se traducen en alertas de la plataforma para monitoreo y flujos de despacho.
- Tras la configuración, el dispositivo debería aparecer en Plaspy y proveer actualizaciones en vivo e historial para reproducción y análisis.

## Flujo común de configuración

1. Acceda al método oficial de configuración del fabricante, como los comandos SMS o la herramienta del proveedor documentada para el BN-408B.
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en la configuración de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
4. Elija UDP o TCP si el equipo requiere selección de transporte y ponga el dispositivo en el modo elegido.
5. Aplique o guarde la configuración y envíe los comandos de verificación que sean necesarios.
6. Reinicie o corte y vuelva a aplicar la alimentación del equipo si el rastreador necesita reinicio para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy comprobando la actividad y las actualizaciones de posición en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El BN-408B soporta configuración por SMS. Los comandos SMS publicados por el fabricante y la contraseña por defecto se muestran a continuación en orden. La contraseña por defecto usada en estos ejemplos es 123456. Si la contraseña de su dispositivo fue cambiada, reemplace 123456 por la contraseña correcta.

- Reset de fábrica (paso inicial opcional)
```text
begin123456
```

- Ajustar la zona horaria a UTC-0
```text
time zone123456 0
```

- Ajustar el APN del operador (reemplace [apn] por el APN de su operador móvil)
```text
apn123456 [apn]
```

- Establecer usuario y contraseña del APN (reemplace los marcadores por las credenciales de su operador)
```text
up123456 [apnu] [apnp]
```

- Configurar el servidor GPRS con la IP y puerto de Plaspy
```text
adminip123456 54.85.159.138 8888
```

- Ejemplo de intervalo de actualización de posición (comando de ejemplo del fabricante)
```text
fix060s060s***n123456
```

- Cambiar a modo GPRS y seleccionar transporte
```text
gprs123456,1,1
```
o, si el dispositivo acepta el comando más simple
```text
gprs123456
```

- Revisar la configuración actual
```text
check123456
```

- Habilitar estado del sensor de combustible o mejorar la transmisión de sensores digitales
```text
protocol123456 18
```

Notas sobre marcadores y comandos
- [apn] es la cadena APN del operador móvil requerida para la conectividad de datos.
- [apnu] y [apnp] son campos opcionales de usuario y contraseña del APN; úselos solo si su operador requiere autenticación.
- El comando adminip anterior usa la IP y el puerto de Plaspy indicados más arriba; alternativamente puede usar el dominio d.plaspy.com si la sintaxis del fabricante admite nombres de dominio.
- El comando de reset de fábrica begin123456 es opcional y normalmente se utiliza sólo en la configuración inicial o para restaurar valores por defecto.

## Notas de configuración

- La sintaxis de comandos y el firmware del fabricante pueden variar entre lotes de producción y versiones de firmware; siempre confirme los formatos de comando con la documentación de su dispositivo.
- La configuración por SMS se muestra porque forma parte del flujo público de configuración del BN-408B; en algunos despliegues se preferirá el software del fabricante o la configuración remota una vez que el GPRS esté activo.
- Elija UDP o TCP según sus necesidades operativas; UDP se usa comúnmente por su menor overhead, mientras que TCP puede ofrecer entrega más fiable en ciertas redes.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo entrante, por lo que el valor de puerto es uniforme entre tipos de dispositivo.
- Mantenga un registro de la contraseña del dispositivo y de cualquier cambio realizado durante la configuración; el uso de una contraseña incorrecta impedirá que los comandos sean aceptados.

## Por qué usar Plaspy con esta configuración

Usar el BN-408B con Plaspy ofrece a las organizaciones una forma clara de recopilar datos de posición, alarmas y estado a largo plazo de activos móviles. El soporte del dispositivo para TCP, UDP y SMS, combinado con la detección automática de protocolos de Plaspy, simplifica la integración y reduce la cantidad de endpoints de servidor específicos por dispositivo que debe gestionar.

Learn more about Plaspy and how it supports fleet and asset tracking at https://www.plaspy.com. Manufacturer specifications and setup methods can change over time, so verify the latest device-specific configuration details and firmware behavior on the official Coban website https://www.coban.net/.
