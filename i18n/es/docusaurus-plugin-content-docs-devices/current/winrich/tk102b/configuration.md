---
slug: /winrich/tk102b/configuration
id: tk102b-configuration
sidebar_label: Configuration
title: Winrich - TK102B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Winrich TK102B, compatibilidad con Plaspy, ajustes de servidor y ejemplos de comandos SMS
keywords:
  - Configuración Winrich TK102B
  - Configuración TK102B
  - Configuración TK102B Plaspy
  - Configuración servidor TK102B
  - Configuración rastreador Winrich
  - Comandos SMS TK102B
  - Configuración rastreador GPS TK102B
  - Configuración rastreador Plaspy
  - Configuración GPRS TK102B
  - Configuración rastreador GPS Winrich
---

# Winrich - Configuración del TK102B

Esta página ofrece el contexto público de configuración para utilizar el rastreador GPS Winrich TK102B con Plaspy. Explica los ajustes de servidor compartidos que utiliza Plaspy, muestra pasos prácticos de configuración disponibles públicamente y documenta los comandos SMS que aparecen en la documentación de Winrich y que se usan habitualmente para apuntar el TK102B a un servidor de seguimiento remoto.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK102B admite configuración por SMS y por GPRS, por lo que esta guía se centra en los comandos SMS públicos y en los valores de servidor de Plaspy que debe aplicar para el reporte en tiempo real.

## Resumen de configuración

Preparar el TK102B para Plaspy implica configurar sus parámetros de red, verificar los intervalos de reporte y confirmar que el equipo puede alcanzar el endpoint del servidor de Plaspy. El objetivo es garantizar que el rastreador envíe datos de posición y eventos a Plaspy de forma fiable, para que los dispositivos aparezcan en la plataforma y generen alertas y registros de ruta.

- Configure el APN y la dirección del servidor GPRS para que el rastreador pueda abrir una conexión de datos.  
- Establezca el intervalo de reporte para controlar la frecuencia con la que el TK102B envía actualizaciones de ubicación a Plaspy.  
- Valide la conectividad con comandos de verificación y compruebe que el dispositivo aparece en Plaspy tras la configuración.  
- Use restablecimiento de fábrica o ajuste de zona horaria sólo cuando sea necesario durante la configuración inicial o en tareas de solución de problemas.  
- Conserve y utilice la copia de seguridad en la tarjeta TF para el historial de rutas cuando falle temporalmente la red GSM (característica del dispositivo).

## Ajustes del servidor Plaspy

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol  
- Plaspy uses the same port for all supported devices, so set port 8888 consistently

## Requisitos previos

- Un TK102B cargado y funcional con acceso a su interfaz de configuración por SMS o a la herramienta de configuración del fabricante.  
- Una tarjeta SIM activa con capacidad de voz y/o datos según vaya a usar SMS o GPRS para la configuración.  
- Capacidad para enviar mensajes SMS al número del rastreador para ejecutar los comandos de configuración por SMS.  
- Conocimiento de los ajustes APN del operador móvil para la SIM que vaya a usar (puede dejar marcadores de APN si prefiere usar APN automático).  
- Acceso básico a la documentación oficial de Winrich o a las instrucciones del proveedor para comportamientos específicos del dispositivo y notas de firmware.  
- Un plan para validar la conectividad del dispositivo después de la configuración comprobando el estado y su aparición en Plaspy.

## Cómo se conecta este rastreador a Plaspy

El TK102B puede configurarse para usar GPRS y abrir un socket hacia Plaspy, enviando informes periódicos de posición y eventos. Usando el endpoint y el puerto indicados más arriba, el rastreador reporta actualizaciones de ubicación, alarmas y mensajes de estado para que Plaspy muestre la posición en vivo, genere alertas y conserve el historial de rutas.

- El rastreador debe apuntar al endpoint compartido de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.  
- El transporte de datos puede ser UDP o TCP según la configuración del dispositivo; seleccione el transporte que soporte el equipo y guarde la configuración.  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesaria una selección manual de protocolo en la plataforma.  
- Los reportes a intervalos regulares se usan para el seguimiento en vivo y la reconstrucción de rutas en Plaspy.  
- Mensajes de evento como SOS o excesos de velocidad se reenviarán a Plaspy cuando el dispositivo los envíe y estén configurados.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial del fabricante, como comandos SMS o la herramienta de Winrich según el manual del dispositivo.  
2. Introduzca la dirección del servidor de Plaspy usando d.plaspy.com o la dirección numérica 54.85.159.138 según el formato de comando que acepte el equipo.  
3. Establezca el puerto del servidor en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos.  
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte y guarde esa opción.  
5. Configure el APN de la SIM si es necesario, y luego establezca la entrada del servidor GPRS apuntando a Plaspy.  
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el fabricante lo indica.  
7. Valide que el dispositivo reporte a Plaspy utilizando comandos de verificación y confirmando su aparición en la plataforma.

## Ejemplos de comandos de configuración

El TK102B admite configuración mediante SMS. Los siguientes comandos son los que se documentan públicamente y se usan con frecuencia para la configuración del TK102B. Envíe cada comando como SMS al número del dispositivo en el orden indicado para la configuración inicial. Las explicaciones de los parámetros se muestran después de cada comando.

- Restablecimiento de fábrica (paso opcional inicial)
```text
940#
```

- Ajustar la zona horaria a UTC+0
```text
801#W0#
```

- Establecer el APN del operador (reemplazar los marcadores por los valores del operador)
```text
802#[apn]#[apnu]#[apnp]#
```
Explicación: [apn] es el APN del operador. [apnu] es el usuario del APN si es requerido. [apnp] es la contraseña del APN si es requerida. Si su operador no requiere usuario o contraseña, puede omitir esos marcadores según el comportamiento del dispositivo.

- Establecer el servidor GPRS a Plaspy (usar IP numérica y puerto)
```text
803#54.85.159.138#8888#
```
Explicación: Esto configura el rastreador para que reporte a la IP y puerto del servidor de Plaspy. También puede usar d.plaspy.com cuando el dispositivo soporte nombres de dominio.

- Establecer el intervalo de actualización/reporte a 60 segundos
```text
730#60#
```

- Comprobar ajustes actuales
```text
886#
```

- Consultar estado del dispositivo
```text
902#
```

Envíe estos comandos SMS desde el número autorizado o el teléfono administrador según requiera la configuración del rastreador y las instrucciones del fabricante.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos o los parámetros soportados; siempre verifique con el manual de Winrich correspondiente a su versión de firmware.  
- El TK102B soporta configuración por SMS como se muestra arriba; algunos instaladores prefieren la herramienta de configuración de Winrich o la configuración directa por puerto serie cuando está disponible.  
- Elija UDP o TCP según sus necesidades de implementación; ambos transportes son compatibles en el puerto 8888 y Plaspy aceptará cualquiera mientras detecta automáticamente el protocolo específico.  
- Si usa nombres de dominio en lugar de IP, confirme que el firmware del rastreador soporte resolución DNS; de lo contrario use la IP numérica indicada.  
- Use los comandos de verificación (886# y 902#) tras la configuración para confirmar los ajustes y el estado del dispositivo antes de esperar datos en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el TK102B con Plaspy centraliza la ubicación en vivo, las alertas de eventos y el historial de rutas en una sola plataforma para mejorar la visibilidad operativa y agilizar las respuestas. La detección automática de protocolos de Plaspy y su endpoint de servidor consistente facilitan la integración de dispositivos que soportan reporte estándar por GPRS, de modo que usted puede concentrarse en el despliegue y la supervisión en lugar de la compatibilidad de protocolos.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer instructions verify details on the Winrich website at http://www.winrichgroup.com/en/ since device configuration methods and behavior can change over time.
