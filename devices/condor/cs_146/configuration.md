---
slug: /condor/cs_146/configuration
id: cs_146-configuration
sidebar_label: Configuration
title: Condor - CS-146 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Condor CS-146 for use with Plaspy including required server settings SMS commands and setup workflow
keywords:
  - Condor CS-146 configuration
  - Condor CS-146 setup
  - CS-146 Plaspy setup
  - CS-146 server configuration
  - Condor GPS tracker configuration
  - Plaspy tracker configuration
  - container tracker setup
  - CS-146 SMS configuration
  - fleet tracking Condor
  - container security tracker
---

# Condor - CS-146 Configuration

This page covers the public configuration context for using the Condor CS-146 GPS tracker with Plaspy. It collects the practical, public configuration steps and server settings you will use to point a CS-146 device at Plaspy so the tracker can deliver location and status updates to your Plaspy account.

Plaspy uses a shared server endpoint and the same port across supported devices and automatically detects the tracker protocol when messages arrive. Manufacturer-side setup steps for the CS-146 can vary by firmware, hardware revision, installation type, and vendor tools, so use this guidance together with the device documentation and the SMS or configuration methods provided by Condor.

## Configuration Overview

The configuration process prepares the CS-146 to communicate with the Plaspy platform, verifies network connectivity, and enables the device to report periodic and event-driven updates to the Plaspy server.

- Configure the device server settings so the tracker reports to the Plaspy server endpoint and port.
- Provide APN and network settings so GPRS or cellular transmission is available and active.
- Apply a device identifier and timezone so reports appear correctly in Plaspy.
- Validate connectivity and confirm the device is sending messages to Plaspy.
- Use the same port that Plaspy requires and let Plaspy auto detect the device protocol for protocol parsing.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on tracker requirements  
- Plaspy automatically detects the tracker protocol when the device connects

Note that all devices in Plaspy use the same port. Use either the domain d.plaspy.com or the IP 54.85.159.138 and set port 8888 on the device.

## Typical Requirements Before Setup

- A powered CS-146 device with the ability to receive SMS configuration commands or access the manufacturer configuration tool.
- An active SIM with a data plan if using cellular GPRS transmission, and the correct APN information for the SIM operator.
- The device IMEI to create identifiers and verify the device on install.
- Access to the Condor configuration method or SMS command syntax as provided by the manufacturer.
- Basic knowledge of whether the device should use UDP or TCP transport so you can select it if required.
- Manufacturer documentation and any installer notes for the specific firmware or hardware revision you are configuring.

## How This Tracker Connects to Plaspy

The CS-146 is configured to send location and status messages to the shared Plaspy server endpoint and port so those messages are available in Plaspy for live tracking and event processing.

- The tracker reports periodic location updates to d.plaspy.com or 54.85.159.138 on port 8888.  
- Messages may be sent over UDP or TCP depending on selected transport; Plaspy auto detects the protocol.  
- Event-driven messages such as remote open or alarm events are forwarded to Plaspy for alerts and workflows.  
- Plaspy processes incoming messages and makes device telemetry available in the platform for visibility and reporting.  
- Confirming that the device appears in Plaspy and sends regular updates completes the integration.

## Common Configuration Workflow

1. Access the official Condor configuration method or software, or prepare to send SMS commands according to the device instructions.  
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the server or GPRS server field.  
3. Set the port to 8888. Plaspy uses the same port for all devices.  
4. Choose UDP or TCP transport if the device requires a transport selection.  
5. Provide APN and any required network credentials using the device configuration method.  
6. Apply or save the configuration and restart the device if the manufacturer procedure requires it.  
7. Validate that the device reports to Plaspy by checking incoming messages and device status in your Plaspy account.

## Example Configuration Commands

The CS-146 supports SMS configuration. The commands below are public examples extracted from the device configuration content. The device default password used in these examples is 0000. Send each command as an SMS to the device from an authorized number when using SMS configuration.

- Set the operator APN. The placeholders {{apn}}, {{apnu}}, and {{apnp}} are preserved and represent APN and optional APN username and password values required by your SIM operator.

```
APN,0000,{{apn}}
```

If your APN requires username and password include them as follows.

```
APN,0000,{{apn}},{{apnu}},{{apnp}}
```

- Set a 5 digit identifier (use the last 5 digits of the IMEI). Replace XXXXX with the last 5 digits of the device IMEI.

```
ALIAS,0000,XXXXX#
```

Example if IMEI last 5 digits are 12345

```
ALIAS,0000,12345#
```

- Set timezone to UTC 0

```
GMT,0000,-0#
```

- Set the GPRS server to report to Plaspy. This command sets the server IP, port, transport and flags for the CS-146 as provided in the public configuration.

```
SERVIDOR,0000,54.85.159.138,8888,U,A#
```

- Set the update interval (example shows a format used by the device to set reporting interval)

```
INTERVALO,0000,M,6#
```

- Set GPRS mode or activate GPRS on the device

```
GPRS,0000,A#
```

- Check or request current settings from the device

```
CONEXION,0000#
```

Notes on placeholders and format
- 0000 is the device default password shown in the public commands. If your device uses a different password substitute it accordingly.  
- {{apn}}, {{apnu}}, and {{apnp}} are placeholders for APN, APN username, and APN password. Replace them with values from your SIM operator.  
- Replace XXXXX in the ALIAS command with the actual last five digits of the IMEI for the device.  
- Commands are listed in the order provided by the public configuration and are typically sent by SMS. Follow Condor guidance on authorized numbers and SMS formatting.

## Configuration Notes

- SMS based setup is included in the public configuration content so ensure the device can receive SMS commands from your configuring phone number.  
- Firmware and hardware revisions can change syntax or supported commands. Confirm exact command formats with Condor for your firmware version.  
- Choose UDP or TCP based on installer preference or compatibility. Plaspy will accept either and detect the protocol automatically.  
- All Plaspy devices use the same port 8888 so use that port consistently when configuring devices for Plaspy.  
- Verify APN settings carefully with your mobile operator before starting GPRS configuration.

## Why Use Plaspy with This Configuration

Using the Condor CS-146 configured to report to Plaspy provides centralized visibility for container location, access events, and operational status. This combination helps operations teams track shipments in real time, receive alerts for access events, and include CS-146 telemetry in consolidated reports and workflows across mixed fleets.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific setup details firmware notes and official command reference verify information on the manufacturer website https://condorskyseeker.com/ as device behavior and configuration methods can change over time.
