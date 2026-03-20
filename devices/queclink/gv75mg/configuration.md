---
slug: /queclink/gv75mg/configuration
id: gv75mg-configuration
sidebar_label: Configuration
title: QuecLink - GV75MG Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for QuecLink GV75MG tracking setup with Plaspy server settings and example SMS commands for integration
keywords:
  - QuecLink GV75MG configuration
  - QuecLink GV75MG setup
  - GV75MG Plaspy
  - GV75MG server configuration
  - GV75MG GPS tracker configuration
  - Plaspy device setup
  - vehicle tracker configuration
  - motorcycle GPS tracker setup
  - QuecLink GV75MG APN settings
  - GV75MG SMS commands
---

# QuecLink - GV75MG Configuration

This page describes the public configuration context for using the QuecLink GV75MG with Plaspy. It collects the server settings, practical setup guidance and example SMS configuration commands that are commonly used to point the GV75MG at Plaspy for live tracking and telemetry ingestion. Use this material to prepare the device and verify connectivity before adding the unit to your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the same port and endpoint are used for multiple tracker models. Exact manufacturer-side setup steps can vary depending on firmware, hardware revision, installation type and vendor tools; the GV75MG also supports SMS-based commands for configuration as shown in the example section below.

## Configuration Overview

This configuration process prepares the GV75MG to communicate securely and reliably with Plaspy, enabling real-time location, event reporting and buffered message delivery to the Plaspy platform.

- Configure the device APN and GPRS settings so cellular data is available for message transmission.
- Point the device to the Plaspy server endpoint (by domain or IP) and the shared port used by Plaspy.
- Choose the transport (UDP or TCP) if the device requires an explicit selection and save the settings.
- Validate the device reports to Plaspy and confirm location and event messages appear in the platform.
- Use the GV75MG SMS commands when remote configuration by SMS is preferred or when on-site serial/software tools are not available.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured using UDP or TCP on port 8888  
- Plaspy behavior: Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Device powered and accessible (installed or bench powered) so configuration commands can be applied.  
- Active SIM with data enabled and correct APN values for the mobile operator. The GV75MG configuration may require APN credentials.  
- Ability to send SMS configuration commands or access the official Queclink configuration tool depending on installer preference.  
- The device default password if using SMS configuration (example shown below uses the default password queclink).  
- Familiarity with the manufacturer's documentation or installer tool for model-specific steps and firmware behaviors.

## How This Tracker Connects to Plaspy

The GV75MG is configured to report location fixes and device events to the shared Plaspy server endpoint and port so the platform can ingest telemetry, trigger alerts and display live positions.

- The device sends GPRS/TCP or GPRS/UDP messages to d.plaspy.com (or 54.85.159.138) on port 8888.  
- Plaspy automatically detects the tracker protocol when the device connects to the endpoint.  
- Location, buffered messages and alarm events are delivered to Plaspy for real-time monitoring and historical playback.  
- Transport can be selected as UDP or TCP on the device; Plaspy supports both and uses port 8888 for all devices.  
- Event notifications such as SOS input activations are forwarded from the GV75MG to Plaspy for rule based actions.

## Common Configuration Workflow

1. Access the official Queclink configuration method or software, or prepare SMS configuraton access if you will configure remotely.  
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device GPRS/server settings.  
3. Set the server port to 8888.  
4. Choose UDP or TCP if the device requires a transport selection.  
5. Configure the APN and APN credentials for the SIM in the device (use placeholders such as [apn], [apnu], [apnp] when scripting).  
6. Apply or save the configuration and restart the device if the firmware requires a reboot for changes to take effect.  
7. Validate that the device reports to Plaspy by checking device connectivity and messages on the platform.

## Example Configuration Commands

The GV75MG supports SMS configuration commands. The following public SMS commands are provided as examples in the manufacturer model configuration. The sample uses the device password queclink (the default password). Preserve placeholders when substituting APN values.

- Optional initial step — restore factory settings (label as optional initial setup):
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Set the time zone UTC+0:
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Set the operator APN (replace placeholders with your operator values):
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
Explanation: [apn] is the operator APN name, [apnu] is the APN username if required, [apnp] is the APN password if required. Leave username/password empty if not used by the operator.

- Set the GPRS server to Plaspy using the domain and IP with port 8888 (device configured to use Plaspy endpoint and port):
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

- Set the reporting interval to 60 seconds:
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Enable SOS button notification on input 2:
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Note: Send these strings as SMS messages to the device number. Keep the default password or change it according to your security practices. Command syntax and exact parameters depend on firmware version; always confirm with Queclink documentation for your firmware.

## Configuration Notes

- SMS based configuration is supported and shown above, but manufacturer tools or a USB/serial configuration interface may also be available; choose the approach that matches your installation workflow.  
- Firmware versions and hardware revisions can change command syntax or available features; always verify commands for your specific GV75MG firmware.  
- You may choose UDP or TCP transport; Plaspy supports both and listens on port 8888 for all devices while auto detecting the protocol.  
- When using APN placeholders such as [apn], [apnu], and [apnp], supply operator-specific values; omit username/password fields if your SIM operator does not require them.  
- After applying configuration changes, restart the device if the manufacturer recommends a reboot to ensure new settings take effect.

## Why Use Plaspy with This Configuration

Using the GV75MG with Plaspy gives organizations resilient, real-time visibility for motorcycles, watercraft and outdoor assets where ruggedness and long standby life matter. The device’s buffered messaging and multi-transport support combined with Plaspy’s protocol detection and centralized ingestion make it practical to maintain continuous tracking and event handling across varied cellular conditions.

To learn more about Plaspy, visit https://www.plaspy.com. For the most current device specific instructions, firmware notes and full command reference consult the manufacturer documentation at https://www.queclink.com/ as device behavior and setup methods may change over time.
