---
slug: /megastek/mt_90n/configuration
id: mt_90n-configuration
sidebar_label: Configuration
title: Megastek - MT-90N Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Megastek MT-90N con ajustes de servidor Plaspy y comandos SMS
keywords:
  - Configuración Megastek MT-90N
  - Configuración MT-90N Plaspy
  - Configuración rastreador Megastek
  - Configuración servidor MT-90N
  - Configuración rastreador GPS MT-90N
  - Configuración dispositivo Plaspy
  - Comandos SMS MT-90N configuración
  - Integración rastreador personal Plaspy
  - Configuración APN MT-90N
  - Guía instalación Megastek MT 90N
---

# Megastek - Configuración MT-90N

Esta página ofrece contexto público de configuración y orientación práctica para usar el Megastek MT-90N con Plaspy. Se centra en los parámetros de servidor compartidos que utiliza Plaspy, los requisitos típicos previos a la instalación y los comandos SMS públicos que los instaladores suelen usar para apuntar el rastreador a Plaspy y habilitar el reporte en tiempo real.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando se conecta. Los pasos específicos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe usar esta guía junto con la documentación oficial de Megastek y las notas de firmware de su dispositivo.

## Visión general de la configuración

El objetivo de configurar el MT-90N para Plaspy es asegurar que el rastreador reporte ubicación y estado de forma fiable al endpoint y puerto del servidor Plaspy para que el dispositivo sea visible en el panel y en los flujos de alertas.

- Apuntar el rastreador al endpoint del servidor Plaspy y definir el transporte y puerto para que los datos lleguen correctamente.
- Configurar el APN y la conexión GPRS o NB IoT para que el dispositivo tenga datos celulares operativos.
- Establecer un intervalo de reporte y un identificador de dispositivo adecuados para que las actualizaciones coincidan con sus necesidades de monitoreo.
- Validar la conectividad y confirmar que el rastreador aparece en Plaspy para que el rastreo en vivo y las alertas funcionen.
- Aplicar la configuración mediante comandos SMS o herramientas del fabricante cuando el dispositivo lo soporte.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte soportado: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador al conectarse
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Una unidad MT-90N con alimentación y batería cargada o alimentación externa según sea necesario para la configuración.
- Una SIM con datos habilitados y, si va a usar configuración por SMS, capacidad de envío de SMS.
- Acceso al IMEI o identificador del dispositivo requerido por los comandos del fabricante.
- El APN del operador y, si aplica, usuario y contraseña del APN proporcionados por su operador (abajo se usan marcadores de ejemplo).
- Acceso al método de configuración oficial de Megastek para este modelo, como comandos SMS o software del proveedor.
- Una forma de monitorear el dispositivo en Plaspy tras la configuración para confirmar el reporte exitoso.

## Cómo se conecta este rastreador a Plaspy

El MT-90N puede configurarse para enviar ubicación y telemetría al endpoint y puerto que Plaspy expone. Una vez que el rastreador apunte al endpoint de Plaspy, la plataforma detectará el protocolo del dispositivo de forma automática y comenzará a procesar mensajes de posición y eventos para mostrarlos en el panel y generar alertas.

- El rastreador envía mensajes de ubicación y estado al endpoint y puerto compartidos de Plaspy.
- Los datos se entregan sobre TCP o UDP según la configuración de transporte del dispositivo.
- Plaspy mapea los mensajes entrantes al panel en tiempo real para seguimiento en vivo y reproducción histórica.
- Eventos como SOS, alarmas de geocerca y notificaciones de batería baja se envían a Plaspy para disparar alertas.
- Confirmar la presencia del dispositivo en Plaspy valida tanto la conectividad de red como la correcta configuración del servidor.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de Megastek para el MT-90N. Este modelo soporta configuración vía SMS y puede también ser configurable mediante software del proveedor.
2. Introduzca d.plaspy.com o 54.85.159.138 en la configuración de servidor del dispositivo, según el método que utilice.
3. Establezca el puerto del servidor en 8888. Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Seleccione UDP o TCP si el dispositivo requiere elegir un protocolo de transporte.
5. Configure el APN y, si corresponde, el usuario y contraseña del APN proporcionados por su operador.
6. Aplique o guarde la configuración usando el método del dispositivo, por ejemplo enviando los comandos SMS que se muestran más abajo o guardando mediante el software del proveedor.
7. Reinicie el dispositivo si el firmware o las instrucciones del fabricante así lo requieren.
8. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad del equipo y las posiciones recientes en el panel de Plaspy.

## Ejemplos de comandos de configuración

El MT-90N suele soportar configuración por SMS. Los ejemplos públicos de comandos que se presentan a continuación reflejan los formatos SMS del fabricante y la contraseña predeterminada del dispositivo usada en el ejemplo. La contraseña por defecto mostrada es 000000 y debe reemplazarse si su dispositivo tiene otra contraseña configurada.

- Notas sobre los marcadores usados en los comandos
  - Reemplace \<15-digit IMEI> por el IMEI del rastreador o el identificador de 15 dígitos requerido por el comando.
  - [apn] es la cadena APN del operador móvil.
  - [apnu] es el usuario del APN si lo requiere el operador.
  - [apnp] es la contraseña del APN si lo requiere el operador.

1. Establecer el ID del dispositivo (reemplazar \<15-digit IMEI> por el IMEI)
```text
M000000,22,<15-digit IMEI>
```

2. Establecer el APN del operador. Use el usuario y la contraseña del APN si son necesarios
```text
M000000,23,[apn]
```
O con usuario y contraseña del APN
```text
M000000,23,[apn],[apnu],[apnp]
```

3. Establecer el intervalo de actualización a 60 segundos
```text
M000000,25,60
```

4. Configurar el servidor GPRS para apuntar a la IP y puerto de Plaspy indicados en los ajustes públicos
```text
M000000,24,56 54.85.159.138,8888
```

5. Habilitar modo GPRS
```text
M000000,21,2
```

Importante: el ejemplo anterior utiliza la IP y el puerto del servidor Plaspy exactamente como se proporcionan en la configuración pública. Dependiendo de su dispositivo y firmware, puede que sea posible usar el dominio d.plaspy.com en lugar de la IP cuando ingrese los valores de servidor en las herramientas del proveedor.

## Observaciones de configuración

- La configuración por SMS está soportada para este modelo como se muestra en los comandos públicos, aunque muchos instaladores usan herramientas de configuración del proveedor cuando están disponibles.
- Las revisiones de firmware y las variantes de hardware pueden cambiar los comandos disponibles y los parámetros requeridos; verifique siempre las notas de firmware del dispositivo.
- Elija TCP o UDP según las necesidades de la instalación; Plaspy acepta ambos y detecta el protocolo automáticamente durante la conexión.
- Plaspy usa el puerto 8888 para todos los dispositivos, por lo que el valor del puerto es consistente entre configuraciones.
- Conserve las contraseñas del dispositivo y cambie los valores por defecto cuando la seguridad operativa lo exija; los comandos de ejemplo usan la contraseña pública por defecto 000000 que muestra el fabricante.

## Por qué usar Plaspy con esta configuración

Usar el MT-90N con Plaspy proporciona visibilidad rápida y monitoreo centralizado para escenarios de rastreo personal y telemetría ligera. El compacto MT-90N, combinado con el panel en tiempo real y las alertas de Plaspy, facilita el despliegue en grupos, eventos y monitoreo ligero de flotas o alquileres, mientras que los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy reducen la fricción en la configuración.

Para saber más sobre Plaspy y cómo esta configuración se integra en la plataforma Plaspy visite https://www.plaspy.com. Para obtener los comandos específicos más actuales, detalles de firmware y la guía del fabricante, verifique la información más reciente en https://www.megastek.com/
