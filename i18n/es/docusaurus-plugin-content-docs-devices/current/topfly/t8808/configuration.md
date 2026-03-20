---
slug: /topfly/t8808/configuration
id: t8808-configuration
sidebar_label: Configuration
title: TopFly - T8808 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopFly T8808 con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - TopFly T8808 configuración
  - TopFly T8808 instalación
  - TopFly T8808 Plaspy
  - configuración rastreador GPS TopFly
  - T8808 configuración SMS
  - T8808 ajustes APN
  - configuración rastreador Plaspy
  - configuración rastreador GPS vehicular
  - configuración seguimiento de flota
  - configuración servidor de rastreadores
---

# TopFly - Configuración del T8808

Esta página describe el contexto público de configuración para usar el rastreador TopFly T8808 con Plaspy. Resume los ajustes de servidor prácticos y el flujo de trabajo habitual para apuntar un dispositivo T8808 al backend de Plaspy, e incluye los comandos SMS de uso público para la configuración inicial cuando aplica.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El T8808 admite configuración por SMS como se muestra en los comandos públicos a continuación; use esta página como punto de partida práctico y verifique los formatos exactos de los comandos en la documentación de TopFly o en las notas de la versión del firmware.

## Resumen de configuración

El objetivo de la configuración es preparar el T8808 para que se comunique de forma confiable con Plaspy y sea visible en la plataforma para seguimiento y monitoreo. Para los dispositivos T8808 esto normalmente implica establecer el APN correcto para GPRS, apuntar el dispositivo al endpoint y puerto del servidor Plaspy, y configurar los intervalos de reporte para que los datos de ubicación se envíen con la cadencia requerida.

- Configure el APN del dispositivo y las credenciales para que el rastreador tenga conectividad GPRS
- Apunte el rastreador al endpoint del servidor Plaspy para que los datos lleguen a d.plaspy.com
- Ajuste el intervalo de reporte y la zona horaria para que las actualizaciones de ubicación coincidan con sus necesidades
- Valide la conectividad del dispositivo y confirme que el rastreador aparece en Plaspy
- Use SMS o las herramientas oficiales de TopFly según la preferencia del instalador

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos pueden usar UDP o TCP

Estos detalles de servidor son los ajustes públicos de Plaspy que debe usar al configurar cualquier rastreador compatible con la plataforma. Plaspy usa el mismo puerto para todos los dispositivos compatibles y realiza detección automática de protocolo.

## Requisitos previos típicos

- Un dispositivo TopFly T8808 instalado y con batería, con una tarjeta SIM funcional y servicio GPRS habilitado
- Acceso al número telefónico del dispositivo o al vehículo donde está instalado el equipo para enviar SMS si va a usar configuración por mensajes
- Nombre del APN y, si corresponde, usuario y contraseña del APN del operador móvil
- Conocimiento del método de configuración del dispositivo proporcionado por el fabricante, como comandos SMS o software oficial de configuración
- Confirmación básica de que el firmware del dispositivo soporta el conjunto público de comandos SMS usados para la configuración

## Cómo se conecta este rastreador a Plaspy

El T8808 está diseñado para enviar datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que puedan visualizarse y gestionarse en la plataforma. Una vez configurado con el APN y los ajustes de servidor correctos, el dispositivo iniciará una conexión GPRS y empezará a reportar usando el protocolo de transporte seleccionado.

- El rastreador se conecta al endpoint del servidor Plaspy d.plaspy.com o a la dirección IP 54.85.159.138 en el puerto 8888
- El transporte puede configurarse como UDP o TCP según las opciones del dispositivo y las necesidades de la instalación
- Plaspy recibe y procesa los paquetes entrantes y detecta automáticamente el protocolo del dispositivo
- Las actualizaciones de ubicación y las alarmas se reenvían a la plataforma Plaspy para su visualización y notificación
- La configuración del intervalo de reporte determina la frecuencia con la que se envían las posiciones a Plaspy

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de TopFly, ya sea comandos SMS o la herramienta del fabricante indicada en la documentación del dispositivo.
2. Ingrese d.plaspy.com o la IP alternativa 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del servidor en 8888 según lo requiere Plaspy.
4. Si el dispositivo solicita selección de transporte, elija UDP o TCP según su red y las necesidades de instalación.
5. Configure el APN y, de ser necesario, el usuario y la contraseña del APN para que el dispositivo tenga conectividad de datos móviles.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware exige un reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma con las actualizaciones de ubicación esperadas.

## Ejemplos de comandos de configuración

Los comandos públicos de configuración del TopFly T8808 se envían comúnmente por SMS al número del dispositivo. Los ejemplos a continuación usan la contraseña por defecto del dispositivo 0000 según las instrucciones públicas de TopFly. Mantenga el orden al realizar la configuración inicial para que primero se establezcan el APN y el servidor antes de habilitar reportes regulares.

- Establecer la zona horaria a UTC 0
```
GMT,0000,0#
```

- Configurar el APN del operador. Reemplace los marcadores con los valores de su operador:
  - {{apn}} = nombre del APN de su operador móvil
  - {{apnu}} = usuario del APN si es requerido (dejar vacío si no se usa)
  - {{apnp}} = contraseña del APN si es requerida (dejar vacío si no se usa)
```
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```

- Configurar el servidor GPRS usando la IP y el puerto de Plaspy
```
IP,0000,54.85.159.138 8888#
```

- Establecer el intervalo de reporte a 60 segundos
```
TIMER,0000,60:60:0:0#
```

Notas sobre estos comandos:
- La contraseña por defecto del dispositivo usada en estos ejemplos es 0000. Si ha cambiado la contraseña del equipo, reemplace 0000 por su contraseña actual.
- Conserve los marcadores {{apn}}, {{apnu}} y {{apnp}} cuando prepare plantillas de SMS y reemplácelos por las credenciales reales de su operador.
- Algunos instaladores prefieren usar un nombre de dominio en lugar de la IP si el firmware del dispositivo lo soporta; si va a usar un dominio, siga las instrucciones de TopFly para la sintaxis de dominio.

## Notas de configuración

- Las revisiones de firmware y hardware pueden afectar el formato de comandos y los parámetros soportados; confirme siempre con la documentación de TopFly para la versión de firmware de su dispositivo.
- El T8808 soporta configuración por SMS según la documentación pública; use SMS únicamente desde un número de teléfono de confianza y registre cualquier cambio de contraseña.
- Elija UDP o TCP según las condiciones de su red y las recomendaciones de su proveedor de conectividad; Plaspy detectará automáticamente el protocolo que utilice el dispositivo.
- Dado que Plaspy usa el puerto 8888 para todos los dispositivos compatibles, asegúrese de que este puerto no esté bloqueado en su red.
- Si los cambios de configuración no surten efecto de inmediato, intente reiniciar el dispositivo o reenviar los comandos en el orden mostrado arriba.

## Por qué usar Plaspy con esta configuración

Usar el TopFly T8808 con Plaspy ofrece una vía sencilla para llevar datos de ubicación y eventos vehiculares a una plataforma unificada de gestión de flotas. Con el endpoint compartido de Plaspy y la detección automática de protocolo, los instaladores pueden confiar en ajustes de servidor consistentes mientras se enfocan en configurar correctamente el APN y el dispositivo.

Para conocer más sobre Plaspy y las funciones de la plataforma, visite https://www.plaspy.com. Para los detalles de configuración específicos del dispositivo, notas de firmware y la guía del fabricante para el TopFly T8808, verifique la información más reciente en https://www.topflytech.com/ ya que las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo.
