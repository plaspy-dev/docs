---
slug: /carscop/cctr_803/configuration
id: cctr_803-configuration
sidebar_label: Configuration
title: Carscop - CCTR-803 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Carscop CCTR-803 tracker configuration for use with Plaspy servers and SMS based setup
keywords:
  - Carscop CCTR-803 configuration
  - Carscop CCTR-803 setup
  - CCTR-803 Plaspy
  - Carscop GPS tracker configuration
  - Carscop tracker setup guide
  - CCTR-803 server configuration
  - GPS tracker SMS configuration
  - GPRS APN setup Carscop
  - Vehicle tracking platform Plaspy
  - CCTR-803 integration guide
---

# Carscop - CCTR-803 Configuration

This page documents the public configuration context for using the Carscop CCTR-803 GPS tracker with Plaspy. It collects the practical server settings and SMS based setup commands published for the device and explains what you need to apply to register and route the tracker to Plaspy for live tracking and platform visibility.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can differ by firmware revision, hardware revision, installation type, and vendor configuration tools. The CCTR-803 supports SMS configuration and GPRS APN setup which are addressed here using only public commands and guidance.

## Configuration Overview

This guide focuses on preparing the CCTR-803 so it can communicate reliably with Plaspy servers for location reporting and event delivery. The device can be configured over SMS to set APN and GPRS server parameters and put the tracker online for Plaspy to receive data.

- Configure operator APN and optional APN credentials so the device can open a GPRS session.
- Set the GPRS server to Plaspy using the provided IP or domain and the shared port used by Plaspy.
- Choose UDP or TCP transport on the device if required by the device configuration method.
- Use SMS commands to apply settings if no PC tool is available and keep the tracker online with keepalive commands.
- Validate connectivity so the device appears and reports correctly on Plaspy once configuration is applied.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

These values are the public Plaspy endpoint settings to use when pointing the CCTR-803 at the tracking platform. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

## Typical Requirements Before Setup

- A working SIM card with mobile data enabled and SMS capability installed in the tracker.
- Sufficient battery or external power so device remains powered during configuration.
- Access to the tracker SMS configuration method or the official Carscop configuration tool.
- Knowledge of the device password used for SMS commands the default shown in public commands is 123456.
- The correct APN information for the mobile operator to enable GPRS connectivity.
- Confirmation that the device firmware supports SMS based GPRS server configuration.

## How This Tracker Connects to Plaspy

When configured, the CCTR-803 reports location and alarm data to the shared Plaspy server endpoint and port. Plaspy automatically detects the tracker protocol so the same port and endpoint can be used across supported devices.

- The tracker initiates a GPRS connection using the configured APN and connects to the Plaspy server endpoint.
- Data is sent to the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888 using UDP or TCP.
- Alarms and SOS events can be forwarded to the platform when configured to report to the server.
- Keepalive commands or periodic upload intervals maintain an active session so Plaspy receives regular updates.
- If SMS based reporting is enabled separately, location can also be checked by SMS but platform visibility requires GPRS reporting to the Plaspy endpoint.

## Common Configuration Workflow

1. Access the official Carscop configuration method or software or prepare to send SMS commands as provided by the manufacturer.
2. Ensure the SIM has data and SMS and that you know the operator APN and any APN credentials.
3. Enter the Plaspy server as either d.plaspy.com or the IP address 54.85.159.138 in the device configuration.
4. Set the port to 8888 as Plaspy uses the same port for all devices.
5. Choose UDP or TCP transport on the device if the device requires explicit transport selection.
6. Apply or save the configuration on the device and restart the tracker if required by the device or for changes to take effect.
7. Validate that the device reports to Plaspy and that location and events appear in the platform.

The example SMS commands below reflect this workflow and show how to set APN, server, and keep the tracker online.

## Example Configuration Commands

The CCTR-803 can be configured by sending SMS commands to the device. The following public commands are presented in the order shown in the manufacturer sample. The device password used in these examples is 123456 which is the default published password. Labeling notes follow each command.

- Optional initial restore to factory settings
```
RESET*123456
```
Use this command only if you need to restore factory defaults before configuration. This is optional and typically used when clearing prior settings.

- Set the time zone to UTC 0
```
TIMEZONE*123456*+00
```

- Set the operator APN
```
APN*123456*{{apn}}
```
Replace {{apn}} with the mobile operator APN string for the SIM card in the device.

- Set the APN username and password if required by the operator
```
USERNAME*123456*{{apnu}}*{{apnp}}
```
Replace {{apnu}} with the APN username and {{apnp}} with the APN password. These placeholders should be filled only if the operator requires credentials.

- Set the GPRS server to Plaspy using the public IP and port
```
IP*123456*54.85.159.138,8888
```
This command sets the device to report to the Plaspy server IP and port. You can also use the domain d.plaspy.com where supported by the device configuration method.

- Keep the tracker online with periodic reporting
```
KEEPONLINE*123456
```
This command helps maintain the device online so it reports regularly to the configured server.

Notes on placeholders and password
- {{apn}} is a placeholder for your mobile operator APN.
- {{apnu}} is a placeholder for APN username where required.
- {{apnp}} is a placeholder for APN password where required.
- 123456 is shown in public samples as the default device SMS password. Change the password after initial configuration where possible.

## Configuration Notes

- Firmware and hardware revisions can change command availability or syntax. Verify commands against the device manual or vendor notes.
- SMS based setup requires that the tracker can receive SMS and that the SIM supports messaging. SMS credit may be needed.
- The CCTR-803 supports setting the GPRS server by IP and port or by domain where the device firmware resolves domain names.
- Choose UDP or TCP transport according to installer preference; Plaspy supports both and will automatically detect the tracker protocol on its shared port.
- After initial setup, change the default password if the device allows it to improve security.

## Why Use Plaspy with This Configuration

Using Plaspy with the Carscop CCTR-803 provides a straightforward way to consolidate vehicle location, alarms, and status reporting in a single platform. By configuring GPRS APN and directing the tracker to Plaspy at the shared endpoint, organizations gain continuous visibility, streamlined event handling, and simplified device management across a fleet.

Learn more about Plaspy and how the platform handles device connections at https://www.plaspy.com. For the latest device specific instructions firmware notes and manufacturer details always verify the current documentation at http://www.carscop.com/
