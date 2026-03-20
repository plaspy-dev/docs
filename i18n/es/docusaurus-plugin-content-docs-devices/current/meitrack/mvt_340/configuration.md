---
slug: /meitrack/mvt_340/configuration
id: mvt_340-configuration
sidebar_label: Configuration
title: Meitrack - MVT-340 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Meitrack MVT 340 para Plaspy con ajustes de servidor comandos SMS y guía de instalación para seguimiento confiable
keywords:
  - Configuración Meitrack MVT 340
  - Configuración MVT 340
  - Configuración servidor Meitrack MVT 340
  - Configuración Plaspy MVT 340
  - Configuración rastreador GPS MVT 340
  - Configuración rastreador GPS Meitrack
  - Configuración rastreador de vehículo Meitrack
  - Comandos SMS Meitrack MVT 340
  - Ajustes servidor rastreador Meitrack
  - Configuración rastreador Plaspy
---

# Meitrack - MVT-340 Configuración

Esta página explica el contexto público de configuración para utilizar el Meitrack MVT-340 con la plataforma de gestión de flotas Plaspy. Aquí encontrará los ajustes de servidor prácticos y ejemplos de comandos SMS que se usan comúnmente para apuntar un MVT-340 a Plaspy y habilitar el reporte en tiempo real. Utilice esta guía junto con la documentación del dispositivo para procesos específicos según su versión y modelo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que todos los equipos reportan al mismo endpoint y puerto de Plaspy. Los pasos de configuración en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del distribuidor. El MVT-340 soporta configuración por SMS en los ejemplos que siguen y los comandos de muestra utilizan la contraseña por defecto 0000 según la documentación pública.

## Resumen de la configuración

El objetivo de la configuración es dejar el MVT-340 listo para comunicar de forma confiable ubicación y eventos a Plaspy. Esto implica aplicar el endpoint y puerto de Plaspy, verificar que los datos celulares y el APN sean correctos, y confirmar que el rastreador aparezca en línea en la plataforma.

- Configure el MVT-340 para que reporte al servidor de Plaspy con los ajustes de servidor indicados.
- Verifique que el dispositivo tenga una SIM activa con datos y el APN correcto para que el reporte por GPRS funcione.
- Establezca los intervalos de reporte y las opciones de eventos para que el rastreador envíe las actualizaciones deseadas a Plaspy.
- Valide la conectividad en Plaspy y confirme que alertas como geocercas o SOS estén disponibles.
- Use comandos SMS o la herramienta del fabricante según su instalación y firmware para aplicar los ajustes.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la instalación

- Un MVT-340 alimentado e instalado o conectado a una fuente de energía estable para la configuración y pruebas.
- Una tarjeta SIM con datos y SMS habilitados y un APN conocido del operador móvil.
- Acceso al método de configuración que soporte el rastreador, como comandos SMS o la utilidad de configuración del fabricante.
- Conocimiento de la contraseña del dispositivo que el rastreador acepta para acciones de configuración; los ejemplos públicos usan la contraseña por defecto 0000.
- Cobertura celular fiable en la ubicación de instalación para un reporte GPRS exitoso.
- Tener a mano los valores de APN, usuario APN y contraseña APN para insertarlos en la configuración del dispositivo si es necesario.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el MVT-340 envía su información de ubicación y eventos desde el rastreador al endpoint y puerto compartidos de Plaspy. Plaspy recibe los datos en el puerto configurado y determina automáticamente el protocolo adecuado.

- El rastreador se configura para reportar al endpoint d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El transporte de datos puede usar UDP o TCP según el soporte del dispositivo y su preferencia.
- El dispositivo enviará actualizaciones periódicas de ubicación según el intervalo de reporte configurado.
- El reporte de eventos como salida de geocerca, activación de SOS y alertas de velocidad se reenviará a Plaspy para su visibilidad.
- Plaspy utiliza un único puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador para simplificar la configuración del servidor.

## Flujo de configuración común

1. Acceda al método oficial de configuración de Meitrack para su MVT-340, ya sea por comandos SMS o por el software de configuración documentado por el fabricante.  
2. Reúna los valores necesarios, incluyendo el endpoint de Plaspy (d.plaspy.com o 54.85.159.138), el puerto 8888, la contraseña del dispositivo y las credenciales APN de la SIM.  
3. Ingrese la dirección del servidor Plaspy usando el método del dispositivo y establezca el puerto 8888. Si el dispositivo acepta un dominio use d.plaspy.com, de lo contrario use 54.85.159.138.  
4. Elija UDP o TCP si el dispositivo requiere selección de transporte y guarde esa opción.  
5. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si las instrucciones del fabricante lo indican.  
6. Valide que el dispositivo reporte a Plaspy y confirme que el rastreador aparezca en línea y envíe las actualizaciones esperadas en la plataforma.  
7. Ajuste los intervalos de reporte o las opciones de eventos en el rastreador según sus necesidades de monitoreo y confirme los cambios desde Plaspy.

## Ejemplos de comandos de configuración

El MVT-340 soporta configuración por SMS. Los siguientes comandos SMS de muestra están presentes en el contenido público de Meitrack y usan la contraseña por defecto 0000. Mantenga el orden cuando aplique comandos donde la secuencia sea importante.

- Reinicio opcional a configuración de fábrica inicial (usar sólo si es necesario durante la configuración inicial):
```
0000,F11
```

- Establecer el servidor GPRS a la IP de Plaspy con puerto y marcadores de APN:
```
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
Explicación: [apn] es el APN del operador móvil. [apnu] y [apnp] son marcadores opcionales para usuario APN y contraseña APN. Mantenga estos marcadores y reemplácelos por las credenciales de su operador según sea necesario.

- Ajustar la zona horaria a UTC 0:
```
0000,B36,0
```

- Establecer el intervalo de actualización a cada 1 minuto:
```
0000,A12,6,0
```

- Configurar las opciones de reporte de eventos:
```
0000,C03,0
```

Notas sobre estos comandos
- Los comandos de ejemplo usan la contraseña por defecto 0000 según la documentación pública; cambie o asegure la contraseña del dispositivo usando el método del fabricante cuando corresponda.
- Mantenga el orden cuando el flujo de trabajo lo requiera, por ejemplo aplicando los ajustes de servidor antes de validar la conectividad.
- Si su método de configuración es una herramienta en lugar de SMS, utilice los campos equivalentes para servidor, puerto, transporte, APN e intervalos en esa herramienta.

## Notas de configuración

- Las revisiones de firmware y hardware pueden alterar la sintaxis exacta de los comandos SMS o los parámetros disponibles; siempre consulte la documentación del dispositivo para su versión de firmware.
- La configuración por SMS está soportada por el conjunto de comandos públicos del MVT-340 mostrado arriba; una utilidad de configuración del fabricante puede ofrecer una alternativa gráfica.
- Use los marcadores [apn], [apnu] y [apnp] para insertar las credenciales de su operador cuando la SIM lo requiera.
- Elija TCP o UDP según su preferencia de instalación y la capacidad del dispositivo; Plaspy detectará automáticamente el protocolo usado por el rastreador.
- Plaspy opera en el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración del servidor y reduce la complejidad por dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el Meitrack MVT-340 con Plaspy ofrece un camino sencillo hacia la visibilidad del vehículo y el monitoreo de eventos. Apuntando el rastreador al endpoint y puerto compartidos de Plaspy, las organizaciones pueden consolidar ubicación en vivo, alertas de geocerca, eventos SOS y otras notificaciones en una sola plataforma para supervisión operativa.

Para conocer más sobre Plaspy y cómo funciona con rastreadores como el MVT-340 visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, notas de firmware y orientación del fabricante verifique los detalles en el sitio oficial de Meitrack https://www.meitrack.com/ ya que los métodos de configuración y el comportamiento pueden cambiar con las revisiones de firmware y hardware.
