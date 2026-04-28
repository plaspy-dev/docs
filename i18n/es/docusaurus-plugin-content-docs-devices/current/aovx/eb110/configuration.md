---
slug: /aovx/eb110/configuration
id: eb110-configuration
sidebar_label: Configuration
title: AOVX - EB110 Configuration
sidebar_class_name: menu_item_tracker
description: Configuración del AOVX EB110 en Plaspy con servidor comandos SMS y pasos prácticos para integrar el rastreador
keywords:
  - configuración del AOVX EB110
  - configuración del AOVX EB110 para Plaspy
  - configuración del servidor AOVX EB110
  - configuración de plataforma GPS AOVX EB110
  - configuración de software de rastreo AOVX EB110
  - configuración del dispositivo AOVX EB110
  - configuración del rastreador AOVX
  - configuración del rastreador en Plaspy
  - configuración de rastreador GPS
  - configuración de seguimiento de flotas
---

# AOVX - Configuración del EB110

Esta página cubre el contexto de configuración pública para usar el AOVX EB110 con Plaspy. Reúne la configuración compartida del servidor Plaspy y los comandos de configuración disponibles públicamente que pueden usarse para apuntar el rastreador hacia la plataforma Plaspy.

Plaspy utiliza el mismo puerto de servidor para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador después de que el equipo se conecta. Los pasos exactos de configuración del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas que proporcione el proveedor.

## Panorama de configuración

El AOVX EB110 se configura enviando comandos públicos de preparación que dejan listo el dispositivo para comunicarse con el servidor de Plaspy. El objetivo es definir el destino de red, confirmar el intervalo de reporte y poner el rastreador en línea para que Plaspy lo reconozca.

- Configure el rastreador para que envíe datos al endpoint compartido del servidor Plaspy.
- Use el puerto público de Plaspy para que el dispositivo pueda conectarse de forma consistente con otros rastreadores compatibles.
- Aplique el APN del operador para que el acceso a datos móviles se establezca correctamente.
- Establezca un intervalo de actualización práctico para que el dispositivo reporte con la frecuencia esperada.
- Cambie el dispositivo al modo de reporte GPRS cuando el flujo de trabajo del fabricante lo requiera.
- Verifique la configuración guardada antes de poner la unidad en operación.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte para UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador después de que el dispositivo comienza a reportar
- Todos los dispositivos compatibles en Plaspy usan el mismo puerto, lo que simplifica el despliegue entre flotas mixtas de rastreadores

## Requisitos habituales antes de configurar

- Confirme que el EB110 esté listo para configurarse mediante el método o herramienta del fabricante.
- Asegúrese de tener acceso a los datos del APN del operador necesarios para configurar datos móviles.
- Verifique que el dispositivo pueda enviar comandos de configuración mediante el método público compatible.
- Revise la documentación actual de AOVX por si existen pasos específicos de firmware que puedan afectar la configuración.
- Prepare los valores del servidor Plaspy antes de aplicar la configuración al dispositivo.
- Mantenga el dispositivo cerca para poder validar la respuesta después de enviar los comandos.

## Cómo se conecta este rastreador a Plaspy

El EB110 se conecta a Plaspy apuntándolo al endpoint compartido del servidor y al puerto de Plaspy, y luego reporta los datos en el formato que espera la plataforma. Una vez que el dispositivo está en línea, Plaspy identifica automáticamente el protocolo del rastreador, por lo que el proceso de configuración se centra en dirigir correctamente el servidor y en validar la conectividad básica.

- El rastreador se configura para enviar datos a d.plaspy.com o a la IP 54.85.159.138.
- La comunicación usa el puerto 8888, que es el mismo que emplean los dispositivos compatibles de Plaspy.
- Se puede usar UDP o TCP en el puerto 8888 si el dispositivo requiere una selección específica de transporte.
- Después de que el rastreador comienza a reportar, Plaspy detecta el protocolo de forma automática.
- El reporte continuo permite que la plataforma muestre la actividad del dispositivo y su estado operativo.
- Una conexión exitosa confirma que la unidad está lista para su monitoreo dentro de Plaspy.

## Flujo común de configuración

1. Abra el método o software oficial de configuración de AOVX para el EB110.
2. Ingrese los datos del APN del operador que requiere el dispositivo usando el flujo de configuración del fabricante.
3. Configure el destino del servidor como d.plaspy.com o, si es necesario, 54.85.159.138.
4. Establezca el puerto en 8888.
5. Elija UDP o TCP si el dispositivo o el firmware requieren una selección de transporte.
6. Aplique o guarde la configuración en la herramienta del fabricante o mediante el método de comando compatible.
7. Reinicie el dispositivo si el proceso de configuración lo requiere.
8. Confirme que el rastreador reporta correctamente a Plaspy y que el protocolo se detecta automáticamente.

## Ejemplos de comandos de configuración

El flujo público de configuración del EB110 incluye comandos por SMS. Los marcadores de posición en el comando de APN representan los valores del operador que deben reemplazarse antes de enviar el comando.

- Configure el APN del operador

```text
APN,{{apn}}# 
```

Si el operador requiere nombre de usuario y contraseña para el APN, incluya los marcadores de posición opcionales según lo indique el flujo del fabricante:

```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Configure el servidor GPRS para Plaspy

```text
SERVER,1,d.plaspy.com,8888,0#
```

- Configure el intervalo de actualización

```text
TIMER,60,60#
```

- Cambie el dispositivo a modo GPRS

```text
GPRSON,1#
```

- Verifique la configuración actual

```text
PARAM#
```

- Verifique el estado del rastreador

```text
STATUS#
```

## Notas de configuración

- El flujo público de comandos se basa en SMS, pero el método exacto de envío puede variar según el firmware y la herramienta del fabricante.
- Tanto UDP como TCP son compatibles del lado de Plaspy para el puerto 8888, así que use el transporte que el dispositivo espere.
- El modelo de servidor compartido simplifica el despliegue porque el mismo puerto aplica para todos los dispositivos compatibles en Plaspy.
- Si el dispositivo no se conecta después de la configuración, revise el APN, el valor del servidor y la elección del transporte antes de cambiar cualquier otra cosa.
- La documentación del fabricante sigue siendo la mejor fuente para conocer el comportamiento específico del dispositivo, especialmente cuando las revisiones de firmware introducen diferencias en la configuración.

## Por qué usar Plaspy con esta configuración

Usar el AOVX EB110 con Plaspy ofrece a las organizaciones una forma práctica de estandarizar la configuración de rastreadores alrededor de un endpoint de servidor compartido, al tiempo que mantiene simple el manejo de protocolos. Como Plaspy detecta automáticamente el protocolo del rastreador, los equipos pueden concentrarse en aplicar los ajustes públicos correctos del servidor y en validar que la unidad esté reportando como se espera.

Esto facilita integrar el EB110 en flujos de trabajo de seguimiento más amplios, especialmente cuando importa mantener consistencia entre dispositivos. Para saber más sobre Plaspy y las capacidades de su plataforma, visite https://www.plaspy.com. Para conocer los detalles más recientes de configuración del dispositivo, el comportamiento del firmware y la guía del fabricante, verifique la documentación actual en https://www.aovx.com/.
