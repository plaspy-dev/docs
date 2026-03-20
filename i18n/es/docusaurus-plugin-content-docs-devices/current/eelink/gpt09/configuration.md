---
slug: /eelink/gpt09/configuration
id: gpt09-configuration
sidebar_label: Configuration
title: EElink - GPT09 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el EElink GPT09 con ajustes de servidor Plaspy y comandos SMS para la configuración básica
keywords:
  - configuración EElink GPT09
  - instalación EElink GPT09
  - configuración de servidor EElink GPT09
  - GPT09 Plaspy
  - configuración rastreador EElink
  - configuración rastreador GPS
  - configuración seguimiento vehicular
  - integración rastreador Plaspy
  - configuración GPS EElink
  - configuración SMS GPT09
---

# EElink - Configuración del GPT09

Esta página cubre el contexto público de configuración para usar el rastreador EElink GPT09 con Plaspy. Explica los ajustes de servidor que Plaspy requiere y muestra los comandos SMS públicos que se utilizan comúnmente para preparar un GPT09 para que reporte en la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; utilice esta guía como referencia práctica y verifique cualquier variación específica del equipo con la documentación oficial de EElink.

## Resumen de configuración

Esta sección resume el objetivo práctico al configurar un GPT09 para usar con Plaspy: preparar el dispositivo para establecer una conexión GPRS con el endpoint del servidor de Plaspy y verificar que el dispositivo reporte ubicación y estado en el intervalo configurado.

- Configure el dispositivo para que apunte al endpoint de Plaspy y pueda enviar datos de posición y estado.
- Defina el APN y parámetros GPRS para que el rastreador tenga conectividad de datos móviles.
- Elija el transporte (UDP o TCP) y confirme los puertos para que coincidan con las expectativas de Plaspy.
- Establezca un intervalo de reporte para que el rastreador proporcione visibilidad con la frecuencia deseada.
- Valide la configuración y confirme que el dispositivo aparezca en Plaspy después de aplicar los ajustes.

## Ajustes del servidor Plaspy

Use los siguientes ajustes de servidor Plaspy al configurar dispositivos GPT09. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y acepta conexiones de dispositivos en el endpoint indicado

## Requisitos habituales antes de la configuración

- Una tarjeta SIM válida con datos habilitados y capacidad SMS instalada en el GPT09.
- Dispositivo cargado o conectado a alimentación y encendido.
- Acceso al método de configuración oficial de EElink para GPT09, como comandos SMS o software del proveedor.
- Información correcta del APN de su operador móvil lista para usar en el comando APN.
- Una forma de enviar comandos SMS al dispositivo desde un teléfono o herramienta de gestión SMS.
- Conocimiento de si su instalación necesita un reporte más frecuente o una configuración de reposo prolongado.

## Cómo se conecta este rastreador a Plaspy

El GPT09 envía ubicación y estado del dispositivo a un endpoint de servidor Plaspy para que el equipo sea visible y administrable dentro de la plataforma Plaspy. La configuración normalmente se aplica mediante el método soportado por el fabricante (en los ejemplos siguientes, comandos SMS), que indica al rastreador que use Plaspy como destino remoto de reporte.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy mediante comandos SERVER.
- Los datos del dispositivo se envían por GPRS usando el APN del operador configurado en el equipo.
- El transporte puede configurarse en UDP o TCP según la opción del dispositivo y la preferencia del instalador.
- La frecuencia de reporte se controla con un comando de temporizador o intervalo para que Plaspy reciba actualizaciones regulares.
- Después de la configuración, Plaspy detectará el protocolo y comenzará a recibir mensajes del dispositivo para su procesamiento y visualización.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de EElink para el GPT09 (SMS, herramienta del proveedor o interfaz de instalador) según lo documentado por EElink.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138.
3. Configure el puerto del servidor en 8888 ya que Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP en el dispositivo si el rastreador requiere una selección explícita de transporte.
5. Configure el APN y las credenciales de APN que requiera su operador móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para que los cambios surtan efecto.
7. Verifique que el dispositivo reporte a Plaspy y que aparezca en la plataforma dentro del intervalo de reporte esperado.

## Ejemplos de comandos de configuración

El GPT09 puede configurarse enviando comandos SMS al dispositivo. Los comandos que siguen provienen de ejemplos públicos de configuración de EElink y se presentan en el orden típicamente usado. Los comandos marcados como opcionales, como reset, son útiles cuando se parte de una configuración desconocida.

- Reset de fábrica inicial opcional (usar solo si necesita borrar ajustes previos)
```
FACTORY#
```

- Establecer la zona horaria a UTC 0
```
GMT,E,0#
```

- Configurar el APN del operador
  - Use solo el nombre del APN:
```
APN,[apn]#
```
  - Si su operador requiere usuario y contraseña del APN inclúyalos:
```
APN,[apn],[apnu],[apnp]#
```
  - Explicación de los marcadores:
    - [apn] es el nombre del APN del operador
    - [apnu] es el usuario del APN si se requiere
    - [apnp] es la contraseña del APN si se requiere

- Establecer el servidor GPRS a Plaspy por dominio (variante por dominio)
```
SERVER,1,d.plaspy.com,8888#
```

- O establecer el servidor GPRS a Plaspy por IP (variante por IP)
```
SERVER,0,54.85.159.138,8888#
```

- Configurar intervalo de reporte a 60 segundos
```
TIMER,60#
```

- Verificar parámetros actuales del dispositivo
```
PARAM#
```

Use la forma SERVER por dominio o por IP según su preferencia o el comportamiento de la red. Tras enviar estos comandos, confirme que el dispositivo tiene conectividad de red y que los mensajes llegan al endpoint de Plaspy.

## Notas sobre la configuración

- Las versiones de firmware y las revisiones de hardware pueden afectar el formato exacto de los comandos y los parámetros disponibles; consulte el manual de EElink para instrucciones específicas según el firmware del GPT09.
- El GPT09 soporta configuración vía SMS según los ejemplos públicos mostrados aquí; también pueden existir herramientas del proveedor u opciones OTA.
- Elija TCP o UDP según sus necesidades de red; Plaspy acepta ambos en el puerto 8888 y detectará automáticamente el protocolo del rastreador.
- Tenga a mano las credenciales del APN; ajustes de APN faltantes o incorrectos son la causa más común por la que un dispositivo no puede alcanzar Plaspy.
- Si utiliza la forma por dominio SERVER,1,d.plaspy.com,8888#, se requiere resolución DNS en la red móvil; la variante por IP ofrece una dirección directa si la DNS no es confiable.

## Por qué usar Plaspy con esta configuración

Configurar el EElink GPT09 para que reporte a Plaspy proporciona a las organizaciones una vía directa para obtener visibilidad de los dispositivos, monitoreo de eventos y supervisión operativa. Con un APN correctamente configurado, ajustes de servidor y un intervalo de reporte adecuado, el GPT09 puede ofrecer actualizaciones periódicas fiables que Plaspy muestra y procesa, ayudando a los equipos a gestionar activos y responder a eventos de manera más eficiente.

Para saber más sobre Plaspy y las configuraciones soportadas visite https://www.plaspy.com. Para los comandos más recientes del GPT09, notas de firmware e instrucciones específicas del equipo, siempre verifique los detalles con el fabricante en https://www.eelink.com.cn/ ya que el comportamiento del firmware y los métodos de configuración pueden cambiar con el tiempo.
