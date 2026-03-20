---
slug: /topfly/solarguardx_100/configuration
id: solarguardx_100-configuration
sidebar_label: Configuration
title: TopFly - SolarGuardX 100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar TopFly SolarGuardX 100 con Plaspy y ejemplos de comandos SMS
keywords:
  - configuración TopFly SolarGuardX 100
  - instalación TopFly SolarGuardX 100
  - configuración servidor SolarGuardX 100
  - configuración SolarGuardX 100 Plaspy
  - configuración rastreador Plaspy
  - guía configuración rastreador GPS
  - configuración rastreador contenedores
  - configuración rastreador GPS solar
  - ajustes servidor rastreo activos
  - comandos SMS configuración
---

# TopFly - Configuración del SolarGuardX 100

Esta página recopila el contexto público de configuración para usar el TopFly SolarGuardX 100 con Plaspy. Incluye los ajustes de servidor prácticos y los comandos SMS proporcionados por el fabricante que se usan comúnmente para apuntar el rastreador a Plaspy y habilitar el envío de ubicación, alarmas y telemetría.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el equipo del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor; use la información siguiente como referencia práctica y confirme cualquier paso específico con la documentación de TopFly.

## Resumen de configuración

Configurar el SolarGuardX 100 para Plaspy prepara el equipo para enviar ubicación, eventos y datos de sensores a la plataforma, de modo que los activos aparezcan en tiempo real y las rutas históricas se conserven. El proceso típicamente incluye la configuración de red y APN, apuntar el dispositivo al endpoint y puerto de Plaspy, y establecer una cadencia de reporte adecuada.

- Prepare el equipo con batería cargada o con suficiente alimentación y una SIM con datos; confirme las credenciales APN.
- Configure la entrada de servidor del rastreador para apuntar a Plaspy usando el endpoint y puerto compartidos.
- Ajuste el intervalo de reporte para ubicaciones y eventos según sus necesidades de visibilidad y consideraciones de batería.
- Valide la conectividad y confirme que el dispositivo aparece y reporta en Plaspy tras la configuración.
- Proteja o cambie la contraseña por defecto del dispositivo después de la configuración inicial para resguardar los comandos remotos.

## Ajustes del servidor Plaspy

Al configurar el TopFly SolarGuardX 100 para usar con Plaspy, utilice los siguientes ajustes públicos del servidor:

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma acepta los transportes soportados

Nota: Todos los dispositivos en Plaspy usan el mismo puerto 8888. Puede ingresar el dominio d.plaspy.com o la IP 54.85.159.138 al configurar el rastreador.

## Requisitos típicos antes de la configuración

- Un SolarGuardX 100 cargado o con alimentación suficiente para realizar las tareas de configuración.
- Una tarjeta nano SIM con datos activos y capacidad SMS, y el APN del operador, usuario y contraseña si son requeridos.
- Acceso al método de configuración oficial de TopFly para su unidad, como comandos SMS o herramientas del proveedor.
- Acceso a la cuenta Plaspy para registrar o validar el dispositivo una vez que comience a reportar.
- Detalles del APN y cualquier bloqueo o ajuste del operador requeridos por su proveedor celular.
- Opcional: configuración BLE o de accesorios si planea reenviar telemetría de sensores a Plaspy.

## Cómo se conecta este rastreador a Plaspy

El SolarGuardX 100 se configura para reportar su posición, alarmas y telemetría auxiliar a Plaspy usando transportes de red estándar. Una vez que el dispositivo está apuntando al endpoint y puerto de Plaspy, la plataforma recibe actualizaciones para monitoreo en tiempo real y análisis histórico.

- El rastreador reporta al endpoint y puerto compartidos de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- Las actualizaciones de ubicación y las alarmas se envían mediante el transporte seleccionado (UDP o TCP).
- Los puntos en búfer se suben cuando vuelve la cobertura, de modo que Plaspy mantiene un historial continuo de la ruta.
- La telemetría de accesorios BLE y datos de eventos pueden ser reenviados a Plaspy como parte de la carga útil del dispositivo.
- Plaspy recibe e interpreta automáticamente el protocolo del rastreador para los dispositivos compatibles.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración TopFly para el SolarGuardX 100, como comandos SMS, la herramienta web o de escritorio del proveedor, o comandos remotos en red.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración de servidor del dispositivo.
3. Establezca el puerto en 8888 (Plaspy usa ese mismo puerto para todos los dispositivos compatibles).
4. Elija UDP o TCP cuando el dispositivo requiera selección de transporte; Plaspy acepta ambos y detectará el protocolo automáticamente.
5. Configure el APN y las credenciales del operador si son requeridas por su proveedor celular.
6. Aplique o guarde la configuración en el rastreador y reinicie el dispositivo si el fabricante recomienda un reinicio.
7. Valide que el dispositivo reporta a Plaspy y aparece en su cuenta con los intervalos de actualización y eventos esperados.

Si utiliza comandos SMS como método de configuración, los ejemplos a continuación siguen el orden recomendado por el fabricante para la configuración inicial.

## Ejemplos de comandos de configuración

El SolarGuardX 100 admite configuración basada en SMS. La configuración de ejemplo a continuación asume que la contraseña del dispositivo es 0000, que es la predeterminada. Reemplace los marcadores según se indica.

- Ajustar la zona horaria del dispositivo a UTC 0
```
GMT,0000,0#
```

- Configurar el APN del operador. Reemplace los marcadores con los valores de su operador:
  - {{apn}} es la cadena APN proporcionada por su operador móvil
  - {{apnu}} es el usuario APN si se requiere
  - {{apnp}} es la contraseña APN si se requiere
```
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```

- Configurar el servidor GPRS a Plaspy usando la IP pública y el puerto. También puede ingresar d.plaspy.com seguido del puerto en herramientas que acepten un nombre de dominio.
```
IP,0000,54.85.159.138 8888#
```

- Establecer el intervalo de reporte a 60 segundos. Este ejemplo usa el formato de comando TIMER mostrado por el fabricante.
```
TIMER,0000,60:60:0:0#
```

Notas sobre estos comandos:
- Los comandos se envían por SMS al número del dispositivo usando la contraseña del dispositivo 0000 indicada aquí. Cambie la contraseña después de la configuración si lo desea.
- Si su método de configuración es una herramienta del proveedor, ingrese los mismos valores (d.plaspy.com o 54.85.159.138 y puerto 8888) y configure el APN y los valores de timer allí en lugar de usar SMS.
- Si el dispositivo o el firmware permiten seleccionar explícitamente el tipo de transporte, elija UDP o TCP según sus necesidades de despliegue; Plaspy acepta ambos.

## Notas de configuración

- Los comandos SMS de ejemplo arriba son comandos públicos proporcionados por el fabricante. Confirme siempre la sintaxis de los comandos con la documentación TopFly más reciente para su revisión de firmware.
- La contraseña por defecto del dispositivo mostrada en el ejemplo es 0000. Actualice la contraseña tras la configuración inicial para proteger los comandos remotos.
- Diferentes revisiones de firmware o hardware pueden exponer opciones adicionales como selección explícita de transporte, ajustes de cifrado o formatos alternativos de timer.
- La configuración por SMS es útil en campo; las herramientas del proveedor pueden ofrecer configuración masiva o una selección de transporte más sencilla para flotas.
- Plaspy usa el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que no son necesarios cambios de puerto por dispositivo en el lado de la plataforma.

## Por qué usar Plaspy con esta configuración

Configurar el SolarGuardX 100 para apuntar a Plaspy ofrece a las operaciones un endpoint de servidor consistente y un flujo de trabajo predecible para incorporar rastreadores solares robustos a una flota o sistema de seguridad de carga. Los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy simplifican la incorporación y permiten que los equipos se concentren en el despliegue y las alarmas en lugar de ajustes servidor por dispositivo.

Aprenda más sobre Plaspy y cómo se integra con dispositivos como el SolarGuardX 100 en https://www.plaspy.com. Para obtener los comandos de configuración específicos más recientes, notas de firmware e instrucciones de instalación, verifique los detalles en el sitio del fabricante https://www.topflytech.com/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con el tiempo.
