---
slug: /coban/bn_311b/configuration
id: bn_311b-configuration
sidebar_label: Configuration
title: Coban - BN-311B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Coban BN-311B para Plaspy con ajustes de servidor y ejemplos de comandos SMS
keywords:
  - configuración Coban BN 311B
  - instalación Coban BN 311B
  - configuración BN 311B Plaspy
  - ajustes de servidor BN 311B
  - configuración rastreador Plaspy
  - configuración GPS Plaspy
  - configuración rastreador GPS motocicleta
  - comandos SMS GPRS
  - configuración plataforma seguimiento vehicular
  - configuración rastreador compacto
---

# Coban - BN-311B Configuración

Esta página documenta el contexto público de configuración para usar el Coban BN-311B con la plataforma de seguimiento Plaspy. Se concentra en los ajustes de servidor prácticos y en ejemplos de comandos del fabricante que normalmente se usan para apuntar el BN-311B a Plaspy, y explica qué verificar antes de que el equipo aparezca en línea en la plataforma. Cuando están disponibles, se incluyen ejemplos públicos de comandos SMS del fabricante para mayor conveniencia.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos del lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El BN-311B suele soportar configuración por SMS y por GPRS, por lo que esta guía combina los detalles del servidor Plaspy con el flujo de comandos SMS públicos para ayudarle a preparar el dispositivo y que informe correctamente a Plaspy.

## Resumen de la configuración

Este proceso prepara al BN-311B para reportar ubicación GNSS y telemetría a Plaspy utilizando el endpoint y puerto compartido de la plataforma. Los pasos típicos incluyen configurar el APN del operador, ajustar la dirección y puerto del servidor GPRS, seleccionar el modo de transporte (UDP o TCP) y verificar la conectividad con una consulta de estado.

- Configure el APN y las credenciales del operador para que el rastreador pueda usar GPRS
- Establezca el servidor GPRS del dispositivo al endpoint de Plaspy y al puerto compartido utilizado por Plaspy
- Elija el protocolo de transporte (UDP o TCP) si el firmware lo solicita
- Valide la conectividad e informe con una verificación de estado del dispositivo para que Plaspy pueda detectar automáticamente el protocolo
- Opcionalmente habilite opciones de reporte de protocolo o sensores que soporte el dispositivo para telemetría más completa

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Un BN-311B instalado y con batería o alimentación conectada y cableado básico completado
- Una tarjeta SIM GSM activa con datos GPRS 2G y SMS si va a usar configuración por SMS
- Acceso a un teléfono o pasarela SMS para enviar comandos de configuración por SMS para la puesta en marcha
- En los ejemplos públicos, la contraseña por defecto usada en los SMS es 123456
- Documentación del fabricante o herramienta de instalador para referencia y posibles instrucciones específicas de firmware
- Confirmación de que el plan de la SIM instalado permite datos GPRS y SMS salientes según sea necesario

## Cómo se conecta este rastreador a Plaspy

El BN-311B envía datos GNSS y de estado a Plaspy por GPRS usando TCP o UDP, o mediante SMS cuando está soportado. En el lado de Plaspy la plataforma escucha en un endpoint y puerto compartidos y identifica automáticamente el protocolo del rastreador para que los dispositivos comiencen a reportar sin cambiar puertos por unidad.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138
- Todos los dispositivos usan el mismo puerto de Plaspy 8888, por lo que los ajustes de servidor son consistentes entre despliegues
- El rastreador envía actualizaciones periódicas de posición e informes de eventos sobre el transporte seleccionado (UDP o TCP)
- Plaspy recibe los mensajes entrantes y detecta automáticamente el protocolo del dispositivo para parsear la telemetría
- Una vez validado el reporte, la ubicación, alarmas y estado aparecen en Plaspy para mapeo y alertas

## Flujo común de configuración

1. Acceda al método oficial de configuración del fabricante, por ejemplo la interfaz de comandos SMS del BN-311B o la documentación del instalador.
2. Asegúrese de que la SIM esté insertada, tenga datos y SMS activos y que pueda enviar mensajes al dispositivo.
3. Envíe los comandos de APN y credenciales al rastreador para que establezca GPRS.
4. Introduzca d.plaspy.com o 54.85.159.138 como la dirección del servidor en la configuración del dispositivo.
5. Configure el puerto del servidor en 8888 en la configuración del equipo.
6. Elija UDP o TCP como transporte si el dispositivo requiere la selección de protocolo y el instalador tiene preferencia por uno.
7. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere.
8. Valide que el dispositivo informe a Plaspy usando un comando de verificación y confirme que la unidad aparece en línea en la plataforma.

## Comandos de configuración de ejemplo

El BN-311B comúnmente acepta comandos de configuración vía SMS. Los ejemplos a continuación muestran el estilo de comandos del fabricante en orden. Los ejemplos públicos usan la contraseña del dispositivo 123456 como valor por defecto. Mantenga los marcadores de posición tal como aparecen y sustitúyalos por los valores de su operador.

- Notas sobre los marcadores de posición
  - [apn] es la cadena APN suministrada por su operador móvil
  - [apnu] es el usuario del APN si es necesario
  - [apnp] es la contraseña del APN si es necesaria

1. Reinicio inicial de fábrica opcional (usar solo si es necesario)
```text
begin123456
```

2. Ajustar la zona horaria a UTC 0
```text
time zone123456 0
```

3. Configurar el APN del operador
```text
apn123456 [apn]
```

4. Establecer el usuario y contraseña del APN
```text
up123456 [apnu] [apnp]
```

5. Configurar el servidor GPRS usando la IP y puerto de Plaspy
```text
adminip123456 54.85.159.138 8888
```

6. Ejemplo de intervalo de actualización de posición
```text
fix060s060s***n123456
```

7. Cambiar a modo GPRS y seleccionar transporte
```text
gprs123456,1,1
```
o, si el firmware soporta una forma más corta:
```text
gprs123456
```

8. Consultar configuración y estado actuales
```text
check123456
```

9. Habilitar reporte de protocolo extendido como estado de combustible o sensores (ejemplo)
```text
protocol123456 18
```

Use estos comandos en el orden indicado cuando el orden sea relevante, y reemplace los marcadores de posición por los valores de su operador. Si el dispositivo emplea una sintaxis distinta de comandos SMS en firmware más reciente, siga la documentación del fabricante.

## Notas de configuración

- El BN-311B soporta configuración por SMS como muestran los ejemplos públicos, pero algunas instalaciones pueden preferir una herramienta de configuración o cable según las prácticas locales de instalación y la versión de firmware.
- Las revisiones de firmware y las variantes de hardware pueden cambiar la sintaxis de los comandos o las opciones disponibles; siempre verifique los comandos con el manual del equipo para su revisión de firmware.
- Elija UDP o TCP según la fiabilidad de la red y las políticas de firewall del operador; Plaspy acepta ambos en el puerto 8888 y detectará automáticamente el protocolo.
- Los ejemplos públicos de SMS usan la contraseña por defecto 123456; confirme si su unidad usa ese valor y considere cambiarla si su política de seguridad lo requiere, empleando el método del fabricante.
- Al usar la IP numérica en lugar del nombre de dominio para el servidor, el ejemplo utiliza 54.85.159.138 que corresponde a Plaspy. d.plaspy.com también es una dirección de servidor soportada.

## Por qué usar Plaspy con esta configuración

Usar el BN-311B con Plaspy ofrece hardware compacto apropiado para motocicletas y vehículos pequeños junto con una configuración de servidor compartida que simplifica despliegues a escala de flota. Apuntar el dispositivo a Plaspy con los ajustes de servidor compartidos permite a los operadores centralizar ubicación en tiempo real, alarmas e informes de eventos para monitoreo operativo y flujos de trabajo contra robo.

Para obtener más información sobre Plaspy y cómo gestionar dispositivos a escala visite https://www.plaspy.com. Para detalles específicos del fabricante, actualizaciones de firmware y referencias exactas de comandos verifique la información más reciente en el sitio de Coban https://www.coban.net/ ya que las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo.
