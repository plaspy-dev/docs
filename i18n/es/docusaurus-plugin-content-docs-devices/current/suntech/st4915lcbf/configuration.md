---
slug: /suntech/st4915lcbf/configuration
id: st4915lcbf-configuration
sidebar_label: Configuration
title: Suntech - ST4915LCBF Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Suntech ST4915LCBF y cómo apuntarlo a los servidores de Plaspy para rastreo
keywords:
  - Suntech ST4915LCBF
  - configuración ST4915LCBF
  - configuración tracker Suntech
  - configuración Plaspy tracker
  - configuración rastreador GPS
  - configuración seguimiento de vehículos
  - seguimiento de activos Suntech
  - configuración servidor Plaspy
  - guía de configuración ST4915LCBF
  - integración plataforma GPS Suntech
---

# Suntech - Configuración ST4915LCBF

Esta página presenta la información pública de configuración para usar el rastreador Suntech ST4915LCBF con Plaspy. Describe los ajustes de servidor prácticos y las plantillas de comandos SMS de uso común para apuntar el dispositivo a Plaspy, de modo que el equipo informe posición y telemetría a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador al recibir los datos. Los pasos del fabricante para configurar un dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del vendedor. Los comandos SMS de ejemplo y las indicaciones en esta página se basan en material público de configuración y deben aplicarse junto con la documentación oficial de Suntech y las prácticas del instalador local.

## Visión general de la configuración

Preparar el ST4915LCBF para la integración con Plaspy implica asegurarse de que el dispositivo pueda alcanzar los servidores de Plaspy y enviar reportes en los intervalos deseados. El proceso de configuración normalmente define los parámetros de red, los intervalos de reporte y garantiza que el dispositivo se identifique correctamente ante Plaspy.

- Configure los ajustes de red del dispositivo y el APN para que tenga acceso a datos celulares y pueda comunicarse con Plaspy.
- Apunte el rastreador al endpoint y puerto del servidor Plaspy para que los datos lleguen a la plataforma.
- Defina los intervalos de reporte y las reglas de evento para que Plaspy reciba actualizaciones de ubicación y telemetría oportunas.
- Verifique la identidad del dispositivo usando el formato de id derivado del IMEI para que Plaspy asocie los reportes al activo correcto.
- Valide la conectividad y los reportes para que el dispositivo aparezca en los mapas y paneles de Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Estos valores son los detalles públicos del endpoint de Plaspy que utilizará en los ajustes del dispositivo o en las plantillas SMS al configurar el rastreador.

## Requisitos típicos antes de la configuración

- Una unidad ST4915LCBF cargada y funcionando con acceso al método de configuración del fabricante o al canal de control por SMS.
- Una SIM celular aprovisionada para datos con el APN correcto del operador local.
- Acceso al número IMEI del dispositivo para derivar el id que el rastreador usará para registrarse en Plaspy.
- Capacidad para enviar comandos SMS al dispositivo si usa configuración por SMS, y permiso para configurar APN y ajustes de reporte.
- Un equipo terminal o herramienta de configuración si el fabricante ofrece interfaz USB o software para configuración masiva o GUI.

## Cómo se conecta este rastreador a Plaspy

El ST4915LCBF envía posición y telemetría al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ofrecer mapas en tiempo real, alertas y registros. Plaspy acepta conexiones entrantes TCP o UDP y determina el protocolo del rastreador automáticamente, por lo que no es necesario seleccionar un protocolo en la plataforma.

- El rastreador se configura para enviar datos a Plaspy en la IP 54.85.159.138 o al dominio d.plaspy.com en el puerto 8888.
- Use UDP o TCP en el dispositivo cuando sea necesario elegir transporte; Plaspy acepta ambos y detecta automáticamente el protocolo.
- Las fijaciones GNSS periódicas y la telemetría de sensores se transmiten a Plaspy para visibilidad en tiempo real e informes históricos.
- Los eventos y estados reportados por el dispositivo se traducen en alertas operativas y métricas en los paneles de Plaspy.
- Una configuración exitosa muestra el dispositivo reportando bajo su id de Plaspy derivado del IMEI.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Suntech o al software correspondiente, o utilice la configuración por SMS si su dispositivo y práctica de instalación lo permiten.
2. En los ajustes del dispositivo ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 como destino.
3. Establezca el puerto de destino en 8888, que Plaspy utiliza para todos los dispositivos.
4. Elija UDP o TCP en la configuración del dispositivo si el rastreador requiere selección de transporte.
5. Aplique o guarde la configuración y envíe los comandos SMS necesarios para programar el APN y los ajustes de servidor del dispositivo.
6. Reinicie el dispositivo si el método de configuración o el firmware exige un reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy y aparezca con el id correcto en los mapas y la lista de dispositivos de la plataforma.

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración del ST4915LCBF se pueden aplicar por SMS según la guía del proveedor. El dispositivo usa un id de 6 dígitos derivado del IMEI para estos comandos. Regla para generar el id de dispositivo: el id son los seis dígitos de las posiciones 9 a 14 del IMEI (contando desde 1), omitiendo efectivamente el dígito final del IMEI. Por ejemplo si el IMEI es 123456789012345 el id es 901234.

Use estas plantillas SMS tal como se muestran. Reemplace [device_id] por el id de seis dígitos derivado del IMEI y mantenga los marcadores [apn], [apnu] y [apnp] según corresponda.

1) Configurar el APN del operador y el servidor GPRS
- Si el APN requiere usuario o contraseña, establezca el flag de autenticación a 1, de lo contrario póngalo en 0.
- Este comando configura el APN y apunta a la IP y puerto del servidor Plaspy.

```
SA200NTW;[device_id];02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

O cuando no se requieren usuario y contraseña para el APN

```
SA200NTW;[device_id];02;0;[apn];; ;54.85.159.138;8888;;;;
```

2) Establecer intervalo de actualización a 60 segundos
- Este comando configura los intervalos de reporte periódicos usados por el dispositivo.

```
SA200RPT;[device_id];02;60;60;60;3;0;0;0;0;0
```

3) Verificar la configuración actual
- Use el comando de verificación para consultar la configuración del dispositivo.

```
SA200CMD;[device_id];02;PresetA
```

Explicación de marcadores
- [device_id]: el id de seis dígitos derivado del IMEI en las posiciones 9 a 14, omita el dígito final del IMEI.
- [apn]: la cadena APN de su operador móvil.
- [apnu]: usuario del APN si el operador lo requiere; deje en blanco si no aplica.
- [apnp]: contraseña del APN si el operador la requiere; deje en blanco si no aplica.

Nota: Los comandos de ejemplo usan la IP del servidor Plaspy 54.85.159.138 y el puerto 8888 según lo publicado. Algunas herramientas de configuración aceptan el dominio d.plaspy.com en lugar de la IP; use la forma que soporte su método de configuración de dispositivo.

## Notas de configuración

- Las diferencias de firmware pueden alterar la sintaxis exacta de los SMS o los campos disponibles. Revise siempre las notas de la versión de firmware antes de aplicar comandos.
- El ST4915LCBF soporta los ejemplos de configuración por SMS arriba indicados cuando la documentación del fabricante muestra SMS como método soportado. Es posible que haya métodos alternativos vía USB o software de configuración.
- Elija UDP o TCP según las necesidades de la instalación y las opciones del dispositivo. Plaspy acepta ambos y detecta el protocolo automáticamente al conectarse.
- Mantenga listas las credenciales del APN y los datos del operador antes de enviar comandos de configuración de red para evitar demoras en la conectividad.
- Si el fabricante proporciona una herramienta GUI, prefiera esa opción para aprovisionamiento masivo y así reducir errores de tipeo en SMS.

## Por qué usar Plaspy con esta configuración

Usar el ST4915LCBF con Plaspy ofrece una forma escalable de recopilar fijaciones GNSS, ubicaciones complementadas por BLE y Wi‑Fi, y telemetría de sensores para visibilidad de flota y activos. Apuntar el rastreador a Plaspy con los ajustes compartidos de servidor garantiza una ingesta consistente de datos de ubicación y eventos para que los equipos operativos puedan monitorear los dispositivos centralmente y responder rápidamente a alertas o anomalías.

Para saber más sobre Plaspy y cómo maneja dispositivos como el ST4915LCBF visite https://www.plaspy.com. Las especificaciones del fabricante y los métodos de configuración evolucionan con el tiempo, por lo que verifique los pasos de configuración específicos del dispositivo y los detalles de firmware más recientes en el sitio de Suntech http://www.suntechint.com/ antes del despliegue final.
