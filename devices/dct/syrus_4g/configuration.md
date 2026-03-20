---
slug: /dct/syrus_4g/configuration
id: syrus_4g-configuration
sidebar_label: Configuration
title: DCT - Syrus 4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for DCT Syrus 4G use with Plaspy including server settings Syrus Desk TMF script and setup workflow
keywords:
  - DCT Syrus 4G configuration
  - Syrus 4G setup
  - Syrus 4G Plaspy
  - Plaspy tracker configuration
  - Syrus Desk TMF script
  - GPS tracker configuration
  - telematics gateway setup
  - vehicle tracking configuration
  - fleet management tracker
  - Syrus 4G server settings
---

# DCT - Syrus 4G Configuration

This page covers the public configuration context for using the DCT Syrus 4G telematics gateway with Plaspy. It explains the shared Plaspy server settings you will point the device to, shows an example Syrus Desk TMF script provided as a public example, and gives a practical workflow to complete a standard integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and the vendor tools you use (for example Syrus Desk). Where a public example command or script is available it is included below; always verify precise steps and options against current DCT documentation and your device firmware release.

## Configuration Overview

The configuration process prepares a Syrus 4G unit to forward GNSS positions and telemetry to Plaspy so the device is visible and manageable from the platform. The goal is to set the device APN and network parameters, point the remote server address to Plaspy, select the transport if required, and enable the reporting rules you need.

- Set the device APN, username, and password (if required by your mobile operator).
- Configure the remote AVL server address to Plaspy and set the port used by Plaspy.
- Select UDP or TCP transport on the device if the firmware requires a transport choice.
- Load or apply a Syrus Desk TMF script to automate multiple configuration steps.
- Save and reboot the device so it begins reporting to Plaspy and becomes visible in the platform.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: the device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and accessible Syrus 4G device with the ability to run Syrus Desk or the manufacturer configuration tool.  
- A valid cellular connection on the device (SIM or eSIM configuration as applicable) and APN details from the mobile operator.  
- Access to Syrus Desk or the vendor tool to load TMF scripts or enter configuration commands.  
- A Plaspy account and a plan configured to accept new device connections (platform access and device registration as required by your workflow).  
- Physical installation and secure power wiring completed so the device has stable vehicle power during configuration.  
- Basic knowledge of whether your installation requires UDP or TCP transport selection for the device firmware.

## How This Tracker Connects to Plaspy

When configured, Syrus 4G forwards GNSS fixes and selected telemetry to the shared Plaspy server endpoint on the platform port. Plaspy receives the data stream, automatically detects the tracker protocol, and processes the messages so the device appears in dashboards and telemetry feeds.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com (or the equivalent IP).  
- Traffic is sent to port 8888, the common port Plaspy uses for all supported devices.  
- You may configure UDP or TCP on the device; Plaspy will detect the protocol used by the tracker.  
- The device sends position updates and event reports according to the configured signal and event rules.  
- Once reporting begins, Plaspy processes and displays location, event, and telemetry data for monitoring and historical playback.

## Common Configuration Workflow

1. Access the official DCT configuration method or software (for example Syrus Desk) that can load TMF scripts or send configuration commands.  
2. Enter the Plaspy server address using either d.plaspy.com or the IP 54.85.159.138 as directed by your installation.  
3. Set the remote port to 8888 (Plaspy uses the same port for all devices).  
4. Choose the transport protocol (UDP or TCP) if your Syrus firmware requires a transport selection.  
5. Configure the device APN, and set APN username and password if required by your operator.  
6. Apply or save the configuration and, if required by the tool or firmware, restart or reboot the device.  
7. Validate that the device reports to Plaspy and that position and telemetry messages are visible in the Plaspy platform.

## Example Configuration Commands

The following is a public example TMF script that can be saved as a plain text file with a .tmf extension and loaded in Syrus Desk. It demonstrates a typical sequence: optional deletion of previous configuration, APN configuration with placeholders, and the remote server/port line pointing to Plaspy. Preserve the placeholders when you edit the script.

Save as a new text file with a .tmf extension and load it with Syrus Desk.

```
#Syrus SB script
#Getting Started example
#Delete any previous configuration
>SRT;CONFIG<
>SXADP**U<
#configuring the APN
>SRFA[apn]<
>SRFI<
>SRFL[apnu]<
>SRFP[apnp]<
#The remote AVL server address and port
>SXADP0000d.plaspy.com;8888<
#A Destination Address holding the server destination
>SDA4;P00<
#Time-only Time And Distance signal definition
>STD80300<
#Event triggered by T&D signal
>SED37NV4;TD8+<
#Input report event
>SED05NV4;IP3+<
#end
```

Notes on the script and placeholders:
- The initial block marked "Delete any previous configuration" (for example >SRT;CONFIG\< and >SXADP**U\<) clears or resets configuration entries and should be used as an initial setup step where appropriate. Treat reset commands as optional for existing installations and use them when you need a clean configuration.  
- [apn] is a placeholder for your mobile operator APN. Replace it with the operator APN string.  
- [apnu] is a placeholder for the APN username if required by the operator. Leave empty or remove if not required.  
- [apnp] is a placeholder for the APN password if required by the operator. Leave empty or remove if not required.  
- The server line >SXADP0000d.plaspy.com;8888\< points the device to Plaspy using the shared port 8888. You may also use the IP 54.85.159.138 if DNS is not preferred in your network.  
- After loading the script in Syrus Desk, save and reboot the device if required to start reporting.

## Configuration Notes

- Firmware variations and different Syrus Desk versions may require slightly different command syntax or load procedures; always confirm the syntax for your specific firmware.  
- Choose UDP or TCP based on your network and device requirements; Plaspy will detect the protocol used by the tracker.  
- If your operator requires APN credentials, fill [apnu] and [apnp]; if not required, leave those fields blank.  
- When reusing or modifying public scripts, back up the device configuration before applying resets or deletion commands.  
- Consult DCT product documentation for device-specific details and for any changes to command names or supported TMF script options.

## Why Use Plaspy with This Configuration

Configuring a Syrus 4G to forward telemetry to Plaspy provides centralized visibility across fleets and devices. For organizations that depend on real-time location, vehicle bus telemetry, and event alerts, using Plaspy with a robust gateway like the Syrus 4G simplifies aggregation, monitoring, and operational decision making.

To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. Manufacturer specifications, firmware behavior, and configuration methods can change over time, so verify the latest device-specific setup details with DCT at https://www.digitalcomtech.com/ before applying changes to production installations.
