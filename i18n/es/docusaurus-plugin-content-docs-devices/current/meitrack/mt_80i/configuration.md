---
slug: /meitrack/mt_80i/configuration
id: mt_80i-configuration
sidebar_label: Configuration
title: Meitrack - MT-80i Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Meitrack MT 80i con Plaspy incluyendo ajustes de servidor comandos SMS y pasos de verificación
keywords:
  - Configuración Meitrack MT 80i
  - Configuración MT 80i
  - MT 80i Plaspy
  - Configuración servidor Plaspy
  - Guía configuración GPS
  - Comandos SMS Meitrack
  - Configuración rastreo vehicular
  - Configuración GPRS tracker
  - Integración plataforma de seguimiento
  - Configuración APN MT 80i
---

# Meitrack - MT-80i Configuración

Esta página describe el contexto público de configuración para usar el rastreador GPS Meitrack MT-80i con Plaspy. Aquí encontrará los ajustes de servidor que Plaspy utiliza, los comandos SMS prácticos que se emplean con frecuencia para apuntar un MT-80i a un servidor de seguimiento y los pasos habituales para validar que el dispositivo informe correctamente en Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que normalmente solo es necesario indicar el mismo endpoint y puerto. Los pasos específicos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; utilice los ejemplos aquí como guía pública práctica y verifique el comportamiento concreto del equipo con la documentación oficial del fabricante.

## Resumen de la configuración

El objetivo de la configuración es dejar el MT-80i listo para enviar de forma fiable datos de ubicación y eventos a la plataforma Plaspy. En el MT-80i ello suele implicar configurar la dirección y puerto del servidor GPRS, confirmar el APN y credenciales si son necesarias, y habilitar el intervalo de reporte y el modo de reporte de eventos deseados.

- Apuntar el dispositivo al endpoint de Plaspy para que los datos se enruten a su cuenta.  
- Configurar el APN y las credenciales del operador para que el dispositivo establezca conectividad GPRS.  
- Ajustar el intervalo de reporte y las opciones de eventos para obtener la visibilidad necesaria.  
- Aplicar la configuración mediante el método del fabricante, por ejemplo comandos SMS o herramientas oficiales.  
- Validar la conectividad y el envío de reportes en Plaspy después de guardar los ajustes.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Transporte: UDP o TCP pueden usarse en el puerto 8888 según preferencia del dispositivo  
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos  
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que el MT-80i debe usar el puerto 8888 para conectarse

## Requisitos típicos antes de configurar

- Un MT-80i cargado y accesible, configurado para aceptar comandos por SMS o GPRS según lo indique el fabricante.  
- Una tarjeta SIM válida con datos habilitados y la información del APN del operador a mano.  
- Acceso para enviar comandos SMS al dispositivo o para usar las herramientas de configuración de Meitrack si lo prefiere.  
- Conocimiento de la contraseña del dispositivo (en los ejemplos abajo se usa la contraseña por defecto 0000).  
- Una cuenta en Plaspy o acceso a la plataforma Plaspy para validar los reportes entrantes.  

## Cómo se conecta este rastreador a Plaspy

El MT-80i se configura para enviar datos al endpoint y puerto compartidos de Plaspy, de modo que la plataforma reciba la información de ubicación y eventos. Una vez que el dispositivo tenga una conexión GPRS funcional y los ajustes de servidor correctos, Plaspy recibirá e interpretará los mensajes mediante la detección automática de protocolo.

- El dispositivo envía mensajes de posición y eventos a d.plaspy.com o a 54.85.159.138 en el puerto 8888.  
- El transporte puede configurarse como UDP o TCP según la preferencia del instalador.  
- Plaspy inspecciona los mensajes entrantes e identifica automáticamente el protocolo Meitrack.  
- Los eventos y los reportes periódicos de posición estarán disponibles en Plaspy tras una entrega exitosa.  
- La validación se realiza confirmando que el dispositivo aparece y reporta en la plataforma Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de Meitrack, por ejemplo comandos SMS o la herramienta del fabricante.  
2. Introduzca como host del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en los ajustes del dispositivo.  
3. Configure el puerto del servidor en 8888, que es el puerto común usado por todos los dispositivos en Plaspy.  
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte.  
5. Ingrese el APN y las credenciales APN si la SIM del operador las exige.  
6. Aplique o guarde la configuración en el dispositivo y reinícielo si es necesario.  
7. Valide en Plaspy que el MT-80i está reportando posiciones y eventos a su cuenta.

## Ejemplos de comandos de configuración

El MT-80i normalmente acepta comandos de configuración por SMS. Los comandos de ejemplo del fabricante que se muestran a continuación están en el formato público de Meitrack. Los ejemplos usan la contraseña por defecto del dispositivo 0000. Mantenga los marcadores de posición como [apn], [apnu] y [apnp] y reemplácelos por los datos de su operador según sea necesario.

- Reinicio a valores de fábrica opcional (usar solo cuando sea necesario):
```text
0000,F11
```

- Establecer el servidor GPRS a Plaspy por IP y puerto con marcador de APN:
```text
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
Nota: el comando A21 arriba especifica los parámetros del servidor GPRS. Reemplace [apn], [apnu] y [apnp] por el APN del operador móvil, el usuario APN y la contraseña APN según corresponda. Si no se requiere usuario o contraseña, deje los marcadores vacíos u omítalos según la sintaxis SMS del dispositivo.

- Establecer la zona horaria a UTC 0:
```text
0000,B36,0
```

- Ajustar el intervalo de actualización a cada 1 minuto:
```text
0000,A12,6,0
```
Explicación: este comando fija el intervalo periódico de subida. Modifique los valores numéricos si necesita un intervalo distinto (consulte la documentación de Meitrack para alternativas).

- Configurar las opciones de reporte de eventos:
```text
0000,C03,0
```
Explicación: este comando configura qué eventos envía el rastreador. Use la referencia oficial de Meitrack para seleccionar otros códigos de evento.

Siga el orden de comandos cuando lo recomiende el fabricante: valores de fábrica (si se usan), configuración de servidor y APN, zona horaria e intervalos de reporte, y luego la configuración de eventos. Después de enviar los SMS, espere un breve período para que el dispositivo establezca GPRS y comience a reportar a Plaspy.

## Notas de configuración

- La configuración por SMS es un método común y ampliamente soportado en dispositivos Meitrack; asegúrese de que la entrega de SMS sea posible antes de depender exclusivamente de ella.  
- Las versiones de firmware o revisiones de hardware pueden cambiar la sintaxis de comandos soportada; siempre consulte el manual del dispositivo para el formato correcto.  
- Elija UDP o TCP según las necesidades de su despliegue; TCP ofrece confirmación de conexión mientras que UDP es más liviano. Plaspy acepta ambos en el puerto 8888.  
- Cambie la contraseña del dispositivo desde el valor por defecto 0000 a una contraseña segura después de la configuración inicial si procede.  
- Verifique el APN y las credenciales con su proveedor de SIM si el dispositivo no puede establecer GPRS.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Meitrack MT-80i ofrece una forma sencilla de centralizar los datos de ubicación, eventos y alertas de rastreadores compactos alimentados por batería. Al apuntar el MT-80i al endpoint y puerto compartidos de Plaspy, las organizaciones obtienen un punto de recolección consistente para la telemetría de los dispositivos y pueden aprovechar la detección automática de protocolo de Plaspy para simplificar la incorporación de múltiples equipos.

To learn more about Plaspy visit https://www.plaspy.com and review the manufacturer documentation for the latest device specifics at https://www.meitrack.com/. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify current information on the official Meitrack website.
