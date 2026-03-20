---
slug: /thingsys/ts_g17m/configuration
id: ts_g17m-configuration
sidebar_label: Configuration
title: ThingSys - TS-G17M Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del ThingSys TS-G17M para Plaspy con ajustes de servidor comandos SMS y flujo de instalación
keywords:
  - configuración ThingSys TS-G17M
  - instalación ThingSys TS-G17M
  - configuración TS-G17M Plaspy
  - configuración servidor TS-G17M
  - configuración rastreador GPS ThingSys
  - ajuste GPS TS-G17M
  - rastreador GPS para motocicleta ThingSys
  - configuración de dispositivo Plaspy
  - integración rastreador GPS Plaspy
  - seguimiento de vehículo TS-G17M
---

# ThingSys - TS-G17M Configuration

Esta página describe el contexto público de configuración para usar el ThingSys TS-G17M con la plataforma Plaspy. Se enfoca en los ajustes de servidor de uso práctico, en un ejemplo de configuración mediante SMS que está públicamente disponible y en el flujo típico necesario para que el dispositivo reporte a Plaspy para seguimiento en tiempo real, alarmas y telemetría.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TS-G17M admite métodos de configuración por GPRS y SMS según la documentación pública, y los comandos de ejemplo a continuación reflejan la secuencia pública basada en SMS para la configuración inicial.

## Resumen de la configuración

Configurar el TS-G17M para Plaspy significa preparar el equipo para que se conecte de forma confiable a los endpoints de servidor de Plaspy y reporte posición y telemetría de alarmas a la plataforma. El flujo público de configuración del dispositivo comúnmente utiliza comandos SMS o la herramienta del proveedor para establecer credenciales APN y el servidor GPRS.

- Apuntar el rastreador al endpoint del servidor Plaspy para que la telemetría GPRS llegue a Plaspy.
- Configurar APN, nombre de usuario APN y contraseña APN para que el dispositivo pueda iniciar sesión de datos móviles.
- Verificar la contraseña del dispositivo y, si corresponde, realizar un restablecimiento de fábrica al iniciar desde cero o al diagnosticar problemas.
- Guardar o aplicar los ajustes y confirmar que el rastreador está enviando datos a Plaspy.
- Validar la visibilidad en Plaspy y probar alarmas o mandos remotos para confirmar la operación de extremo a extremo.

## Resumen de la configuración

Configurar el TS-G17M para Plaspy implica dejar el dispositivo listo para comunicarse de manera estable con los endpoints de Plaspy y enviar información de ubicación y eventos a la plataforma. El proceso público de configuración suele emplear comandos SMS o la herramienta del fabricante para introducir credenciales APN y el servidor GPRS.

- Apunte el rastreador al endpoint del servidor Plaspy para que la telemetría GPRS sea recibida por Plaspy
- Configure APN, nombre de usuario APN y contraseña APN para que el equipo pueda establecer una sesión de datos móviles
- Verifique la contraseña del dispositivo y realice un restablecimiento de fábrica opcional cuando empiece desde cero o durante resolución de fallos
- Guarde o aplique los ajustes y luego confirme que el dispositivo aparece en Plaspy
- Pruebe el reporte forzando una actualización GPS o activando una alarma conocida para confirmar la entrega de extremo a extremo

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para dispositivos y herramientas de proveedor que acepten un nombre DNS
- IP del servidor 54.85.159.138 para dispositivos que requieran una dirección IP
- Puerto 8888 usado por Plaspy para todos los dispositivos soportados
- Transporte compatible UDP o TCP según el firmware del rastreador y la opción de configuración
- Plaspy detecta automáticamente el protocolo del rastreador por lo que el mismo puerto y endpoint pueden servir varios tipos de dispositivos

## Requisitos típicos antes de la configuración

- Un TS-G17M instalado y con alimentación, con acceso a la interfaz SMS del dispositivo o a la herramienta oficial de configuración de ThingSys
- Una SIM activa con datos móviles habilitados y las credenciales APN correctas del operador móvil
- Conocimiento de la contraseña del dispositivo; el ejemplo público usa la contraseña de fábrica 123456
- Acceso a la documentación del fabricante o a las notas de versión para su revisión de firmware cuando estén disponibles
- Cobertura para GPRS/TCP o entrega SMS para que el rastreador pueda enviar datos a Plaspy
- Acceso administrativo a Plaspy para registrar o verificar el dispositivo una vez que comience a reportar

## Cómo se conecta este rastreador a Plaspy

El TS-G17M se configura para enviar su telemetría y alarmas a Plaspy mediante el endpoint y el puerto GPRS configurados. Plaspy recibe mensajes de ubicación, estado y alarmas y los incorpora en la plataforma para seguimiento en tiempo real, alertas de eventos y reproducción histórica.

- El rastreador reporta al endpoint y puerto compartidos de Plaspy configurados en el dispositivo
- La telemetría y las alarmas se entregan vía GPRS/TCP o GPRS/UDP según la configuración del dispositivo
- Plaspy detecta automáticamente el protocolo y procesa los mensajes entrantes para el tipo de dispositivo correcto
- Alarmas y eventos como SOS, vibración, batería baja y estado ACC se reenviarán a Plaspy para notificación y registro
- Una configuración exitosa resulta en actualizaciones de posición visibles y registros de eventos dentro de Plaspy

## Flujo típico de configuración

1. Acceda al método de configuración oficial de ThingSys para su dispositivo, como comandos SMS o software del proveedor. Esta es la interfaz soportada por el fabricante para cambiar los ajustes de servidor y APN.
2. Asegúrese de que el dispositivo tenga una SIM activa y la información APN correcta lista para ingresar.
3. Ingrese el endpoint del servidor Plaspy especificando d.plaspy.com o la IP 54.85.159.138 de acuerdo con el método de comando de su dispositivo.
4. Configure el puerto en 8888 y elija UDP o TCP si el equipo requiere seleccionar el transporte.
5. Aplique o guarde la configuración y, si el fabricante lo recomienda, reinicie o haga un ciclo de energía del dispositivo.
6. Valide que el dispositivo reporte a Plaspy comprobando la actividad del equipo y las actualizaciones de ubicación dentro de la plataforma Plaspy.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS son los pasos de ejemplo públicos provistos para el TS-G17M. Estos comandos se envían como mensajes SMS al dispositivo. La contraseña por defecto usada en el ejemplo es 123456. Preserve los marcadores de posición al introducir valores específicos del operador.

- Restablecimiento de fábrica inicial opcional (usar solo cuando sea necesario como parte de una configuración nueva)
```text
FORMAT
```

- Configurar el APN del operador
```text
apn123456 {{apn}}
```

- Configurar el nombre de usuario APN
```text
apnuser123456 {{apnu}}
```

- Configurar la contraseña APN
```text
apnpasswd123456 {{apnp}}
```

- Establecer el servidor GPRS usando la IP pública de Plaspy y el puerto
```text
ip54.85.159.138 8888
```

- Verificar ajustes actuales
```text
CXZT
```

Notas sobre los comandos anteriores
- Los ejemplos muestran la sintaxis pública de SMS según la documentación. Mantenga el orden de los comandos al aplicar la configuración de red inicial.
- Explicación de marcadores de posición: {{apn}} es la cadena APN del operador móvil, {{apnu}} es el nombre de usuario APN cuando sea requerido, y {{apnp}} es la contraseña APN cuando sea requerida.
- Si su firmware admite especificar un nombre DNS en lugar de una IP, apunte el servidor a d.plaspy.com en el puerto 8888 usando la sintaxis o la herramienta recomendada por el fabricante. No cambie el puerto; Plaspy usa el puerto 8888 para todos los dispositivos soportados.

## Notas de configuración

- Las variaciones de firmware pueden cambiar la sintaxis exacta de los SMS o los prefijos de comandos; siempre verifique el formato de los comandos para su versión de firmware.
- Las herramientas del fabricante o el software de configuración del proveedor pueden ofrecer los mismos ajustes mediante una interfaz gráfica; utilice el método oficial de ThingSys cuando esté disponible.
- Elija UDP o TCP según la capacidad del dispositivo y la fiabilidad de la red; Plaspy aceptará cualquiera de los dos y detectará el protocolo automáticamente.
- La contraseña por defecto 123456 se muestra en el ejemplo público; cambie las contraseñas del dispositivo cuando sea posible por seguridad.
- Use el comando de restablecimiento de fábrica solo cuando sea necesario durante la puesta en marcha inicial o para la resolución de problemas.

## Por qué usar Plaspy con esta configuración

Usar el TS-G17M con Plaspy centraliza la localización, las alarmas y la telemetría operativa en una sola plataforma para que los equipos puedan monitorear activos, recibir eventos y realizar intervenciones remotas como inmovilización por relé. Los ajustes de servidor compartidos de Plaspy y la detección automática de protocolos simplifican la integración de flotas al reducir la necesidad de puertos de servidor específicos por dispositivo.

Para obtener más información sobre Plaspy y cómo gestiona la integración de dispositivos, visite https://www.plaspy.com. Para las instrucciones de configuración específicas del dispositivo más actualizadas, el comportamiento del firmware y los detalles del fabricante, verifique la información más reciente en el sitio oficial de ThingSys https://www.thingsys.com/
