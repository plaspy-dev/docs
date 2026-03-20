---
slug: /meitrack/gt_60/configuration
id: gt_60-configuration
sidebar_label: Configuration
title: Meitrack - GT-60 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Meitrack GT-60 y conectarlo a Plaspy con ajustes de servidor comandos SMS y pasos de instalación
keywords:
  - Configuración Meitrack GT-60
  - Instalación Meitrack GT-60
  - Configuración de rastreador Plaspy
  - Comandos SMS GT-60
  - Ajustes de servidor Meitrack
  - Configuración de rastreador GPS
  - Configuración rastreador para mascotas
  - Configuración GPRS GT-60
  - Integración GPS Plaspy
  - Plataforma de rastreo Meitrack
---

# Meitrack - Configuración GT-60

Esta página reúne la información pública necesaria para preparar un Meitrack GT-60 y conectarlo a Plaspy. Incluye los ajustes de servidor prácticos y ejemplos de comandos SMS publicados en la documentación pública para que pueda configurar el dispositivo y lograr visibilidad de ubicación y eventos en la plataforma. El GT-60 es un rastreador portátil y para mascotas, compacto, con GPS y conectividad GSM; habitualmente se configura mediante comandos SMS para la puesta en marcha.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Esta guía se enfoca en el endpoint de Plaspy y en los ejemplos públicos de comandos SMS para el GT-60, para que aplique la información correcta del servidor y valide la conectividad antes de agregar el dispositivo a la plataforma.

## Resumen de la configuración

Preparar un GT-60 para funcionar con Plaspy implica configurar el dispositivo para que envíe sus reportes de ubicación y eventos al endpoint del servidor de Plaspy y confirmar que es accesible. En el GT-60 esto se realiza comúnmente vía comandos SMS para establecer los detalles GPRS del servidor, el intervalo de reporte, la zona horaria y las reglas de eventos.

- Configure el GT-60 para que reporte a los ajustes de servidor de Plaspy y así posiciones y eventos lleguen a la plataforma
- Establezca el intervalo de reporte y la zona horaria según sus necesidades de rastreo y hora local
- Valide la conectividad GPRS y SMS para garantizar que el dispositivo pueda alcanzar Plaspy
- Use los ejemplos de comandos SMS para aplicar la IP o dominio del servidor y los marcadores de APN
- Confirme que el dispositivo aparece en Plaspy después de aplicar los ajustes y reiniciarlo si es necesario

## Ajustes del servidor Plaspy

- Dominio de servidor d.plaspy.com para configuración y reportes de dispositivos
- IP del servidor 54.85.159.138 como alternativa para el endpoint
- Puerto 8888 que es el puerto único que Plaspy utiliza para todos los dispositivos
- Soporte de transporte UDP o TCP según lo admita el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador para conexiones entrantes

## Requisitos típicos antes de la configuración

- Un GT-60 con batería cargada y acceso físico al equipo para enviar comandos SMS o acceso a un administrador del dispositivo
- Una tarjeta SIM activa instalada en el equipo con plan de datos válido o capacidad para enviar SMS según sea necesario
- Conocimiento de los ajustes APN del operador para completar el marcador [apn] y opcionalmente [apnu] y [apnp]
- Acceso a un teléfono móvil capaz de enviar SMS al GT-60 usando la contraseña del dispositivo
- La contraseña por defecto del dispositivo si no fue cambiada aparece en los ejemplos como 0000
- Acceso a la documentación oficial de Meitrack o a herramientas del fabricante para referencias y detalles específicos de firmware

## Cómo se conecta este rastreador a Plaspy

El GT-60 se configura para enviar su ubicación y eventos al endpoint y puerto compartidos de Plaspy, de modo que los datos del dispositivo sean visibles en la plataforma. La configuración suele hacerse por comandos SMS para definir el servidor GPRS, el intervalo de actualización y el comportamiento de reporte de eventos, permitiendo que el rastreador inicie conexiones a Plaspy por datos celulares.

- El dispositivo envía reportes periódicos de ubicación a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte se selecciona como UDP o TCP en el dispositivo si el firmware lo requiere
- Plaspy detecta automáticamente el protocolo del rastreador cuando este se conecta al servidor
- El reporte de eventos y las actualizaciones periódicas se habilitan mediante comandos SMS que controlan qué envía el tracker
- Tras la configuración, puede validar el equipo confirmando que aparece y reporta en Plaspy

## Flujo de trabajo habitual para configurar

1. Acceda al método oficial de configuración de Meitrack o prepárese para enviar comandos SMS según el procedimiento público del GT-60
2. Ingrese d.plaspy.com o 54.85.159.138 como destino del servidor GPRS en el dispositivo
3. Configure el puerto del servidor en 8888 que Plaspy usa para todos los dispositivos
4. Seleccione UDP o TCP en el equipo si el firmware requiere elegir el transporte
5. Aplique o guarde la configuración en el dispositivo usando el método del proveedor o enviando los comandos SMS necesarios
6. Reinicie el dispositivo si el equipo o firmware exige un reinicio para aplicar cambios de red
7. Valide que el dispositivo reporte a Plaspy revisando los datos entrantes en la plataforma y confirmando las actualizaciones periódicas

## Comandos de configuración de ejemplo

Los comandos de muestra para el GT-60 se envían normalmente por SMS al dispositivo. El ejemplo usa la contraseña por defecto 0000. Los comandos se muestran en el orden publicado en la documentación pública. El comando de restauración a valores de fábrica es opcional y solo debe usarse si pretende reiniciar el dispositivo durante la configuración inicial.

1. Comando opcional de restauración a fábrica
```
0000,F11
```
Use esto solo si desea restaurar los ajustes de fábrica antes de aplicar una nueva configuración. Es un paso opcional y debe emplearse con precaución.

2. Configurar el servidor GPRS a Plaspy usando IP y puerto con marcador APN
```
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
- Este comando establece el servidor GPRS con la IP y el puerto de Plaspy. El ejemplo incluye marcadores para los ajustes APN.
- [apn] es el APN de su operador. [apnu] y [apnp] son usuario y contraseña del APN opcionales. Si su operador no requiere usuario ni contraseña, puede omitir esos valores según las reglas del dispositivo.

3. Establecer la zona horaria a UTC 0
```
0000,B36,0
```
- Configure la zona horaria del rastreador. Ajuste el valor numérico si requiere otro desfase horario.

4. Establecer el intervalo de actualización a 1 minuto
```
0000,A12,6,0
```
- Este ejemplo define el intervalo de actualización de ubicación. Los parámetros exactos de A12 corresponden al esquema de intervalos del firmware publicado en la documentación.

5. Configurar reporte de eventos
```
0000,C03,0
```
- Este comando ajusta el reporte de eventos según el conjunto de comandos público del GT-60. Modifique los parámetros según sus preferencias de eventos.

Nota sobre marcadores y formato
- Mantenga los marcadores [apn] [apnu] y [apnp] al preparar los comandos y reemplácelos por los valores de su operador antes de enviar los SMS
- Los ejemplos respetan el orden de comandos que suele ser importante en la configuración inicial

## Notas de configuración

- La sintaxis exacta de los comandos SMS y los parámetros disponibles pueden variar según el firmware del fabricante y revisiones regionales de hardware, por lo que verifique los comandos contra la documentación actual de Meitrack
- El GT-60 admite configuración por SMS como en los ejemplos, pero Meitrack también puede ofrecer herramientas para PC o provisión por servidor en algunos mercados
- Si el dispositivo exige seleccionar UDP o TCP, elija el transporte adecuado para su despliegue y confirme que Plaspy admite la detección automática del protocolo
- Las contraseñas por defecto como 0000 aparecen con frecuencia en ejemplos públicos; considere cambiar la contraseña del dispositivo después de la configuración inicial si el equipo lo permite
- Los valores de APN varían según el operador móvil, confirme el APN correcto y las credenciales opcionales antes de enviar el comando A21

## Por qué usar Plaspy con esta configuración

Utilizar Plaspy con el Meitrack GT-60 permite centralizar la visibilidad de reportes de ubicación y eventos para que los operadores supervisen los dispositivos en casi tiempo real y aprovechen las herramientas de la plataforma para seguimiento y gestión operativa. Los ajustes de servidor compartidos y la detección automática de protocolo simplifican el proceso de incorporación, ya que las mismas convenciones de puerto y endpoint aplican para los dispositivos soportados.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y para la información más reciente sobre configuración específica del dispositivo y firmware verifique los detalles en el sitio del fabricante https://www.meitrack.com/
