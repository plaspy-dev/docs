---
slug: /eelink/tk4193/configuration
id: tk4193-configuration
sidebar_label: Configuration
title: EElink - TK419‑3 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink TK419‑3 and Plaspy with server settings SMS commands and practical setup steps
keywords:
  - EElink TK419 3 configuration
  - EElink TK419 3 Plaspy setup
  - TK419 3 server configuration
  - TK419 3 SMS commands
  - TK419 3 APN settings
  - Plaspy tracker integration
  - GPS tracker configuration guide
  - vehicle tracking platform setup
  - TK419 3 telemetry configuration
  - EElink device setup
---

# EElink - TK419‑3 Configuration

This page documents the public configuration context for using the EElink TK419‑3 GPS tracker with Plaspy. It focuses on the practical, published settings and SMS commands that prepare the device to report location and telemetry to Plaspy’s shared server endpoint and port.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so a single server configuration will work for most trackers. Manufacturer-side steps can vary by firmware revision, hardware variant, installation type, and vendor tools, so use this guide together with the official EElink documentation when making final changes.

## Configuration Overview

This configuration process prepares the tracker to communicate reliably with Plaspy so position fixes, I/O states, and alarms are visible in the platform. The public SMS commands provided by EElink can be used for initial setup and verification when over the air provisioning tools are not available.

- Configure the device to send data to Plaspy’s server endpoint and port so the tracker appears in the platform.
- Set the operator APN so the device can establish GPRS or LTE data connectivity.
- Choose UDP or TCP transport on the tracker if required; Plaspy supports both transports and auto detects the protocol.
- Define a reporting interval to control how often the device sends location updates to Plaspy.
- Verify parameters and confirm the device successfully reports to Plaspy using a parameter check command.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: UDP or TCP may be used on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

These are the public settings that you should enter on the device or via SMS so Plaspy receives telemetry from the TK419‑3.

## Typical Requirements Before Setup

- A valid active SIM installed with a data plan and the correct APN for the mobile operator.  
- Access to the device SMS command channel for devices configured by SMS or access to the vendor configuration tool if available.  
- Sufficient device power and a stable installation to perform configuration and testing.  
- The device must have cellular connectivity enabled and be in an area with network coverage for GPRS or LTE.  
- Knowledge of the APN, and optional APN username and password, as required by the mobile operator.  
- Access to the official EElink documentation or vendor support for device-specific details and firmware differences.

## How This Tracker Connects to Plaspy

The TK419‑3 is configured to send GNSS fixes, input states, and alarm events to Plaspy’s shared server and port so the platform can display real time location and device telemetry. In practice, configuration sets the APN and server parameters and the device then opens a TCP or UDP session to the Plaspy endpoint.

- The tracker sends periodic location updates to d.plaspy.com or 54.85.159.138 on port 8888.  
- Transport is selectable as UDP or TCP on the device; Plaspy accepts both and auto detects the protocol.  
- Telemetry and event messages are delivered to Plaspy where they are normalized into map updates and alerts.  
- Reporting intervals control how frequently the device transmits position and status to the shared Plaspy server.  
- Validation is performed by confirming parameter settings and observing successful connections to the Plaspy endpoint.

## Common Configuration Workflow

1. Access the official EElink configuration method such as the vendor SMS interface or the provided configuration tool.  
2. Set the operator APN using the APN command so the device can connect to cellular data networks.  
3. Enter the Plaspy server by name or IP using d.plaspy.com or 54.85.159.138 and set port 8888.  
4. Choose the transport protocol (UDP or TCP) if the device requires an explicit selection.  
5. Apply or save the configuration on the tracker and, if applicable, send the SMS commands in the required order.  
6. Restart the device if required by the manufacturer or to force a fresh network attach and server connection.  
7. Validate that the device reports to Plaspy by checking parameter status and confirming the device appears in the platform.

## Example Configuration Commands

The TK419‑3 accepts public SMS commands for basic configuration. Below are the meaningful commands extracted from published EElink instructions. Send these commands as SMS messages from an authorized phone number or using the vendor management tool that supports SMS command delivery.

1. Optional initial factory reset (use only when required for clean setup)
```
FACTORY#
```

2. Set the time zone to UTC 0 (adjust if you need a different timezone)
```
GMT,E,0#
```

3. Set the operator APN. Replace [apn] with your network operator APN. If your operator requires a username and password, include [apnu] and [apnp] as provided by the carrier.
```
APN,[apn],[apnu],[apnp]#
```
Explanation: [apn] is the APN string. [apnu] is the APN username and [apnp] is the APN password. If no username or password is required, the command may be sent with only the APN value depending on firmware behavior.

4. Set the GPRS server to the Plaspy domain on port 8888 (preferred domain name)
```
SERVER,1,d.plaspy.com,8888#
```

5. Alternatively set the GPRS server to the Plaspy server IP on port 8888
```
SERVER,0,54.85.159.138,8888#
```

6. Set the reporting update interval to 60 seconds
```
TIMER,60#
```

7. Verify current parameter settings
```
PARAM#
```

Follow the command order above when setting core parameters. Use the SERVER command either with the domain or the IP as shown. Plaspy uses port 8888 for all supported devices and will automatically detect the protocol when the tracker connects.

## Configuration Notes

- Firmware and hardware revisions may accept slightly different SMS syntax or require commands in a different form; consult the EElink documentation for firmware specific details.  
- Both SMS based configuration and vendor tools may be supported; use the method recommended by your installer or EElink for your region.  
- TCP versus UDP selection is available; choose the transport required by your installation and network environment. Plaspy accepts both and auto detects protocol on connection.  
- Preserve APN placeholders exactly as provided when composing commands and replace them with operator values during setup.  
- If you perform a factory reset, treat it as optional and use it only when you need a clean configuration state.

## Why Use Plaspy with This Configuration

Using the TK419‑3 with Plaspy gives fleet and asset managers a straightforward path to real time location, event-driven alerts, and telemetry reporting. The published SMS commands let technicians provision APN and server settings quickly, and Plaspy’s shared server and automatic protocol detection simplify ongoing device onboarding.

Learn more about Plaspy and supported device workflows at https://www.plaspy.com. For the latest TK419‑3 firmware behavior, command syntax, and manufacturer guidance verify device specific setup details on the official EElink website https://www.eelink.com.cn/ as vendor documentation and firmware can change over time.
