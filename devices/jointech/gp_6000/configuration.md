---
slug: /jointech/gp_6000/configuration
id: gp_6000-configuration
sidebar_label: Configuration
title: Jointech - GP 6000 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Jointech GP 6000 tracking setup with Plaspy including server settings SMS commands and practical workflow
keywords:
  - Jointech GP 6000 configuration
  - GP 6000 setup guide
  - GP 6000 Plaspy setup
  - Jointech GPS tracker configuration
  - GP 6000 server configuration
  - vehicle tracking setup
  - GPS tracker SMS configuration
  - GPRS tracker configuration
  - Plaspy tracker integration
  - GPS platform setup
---

# Jointech - GP 6000 Configuration

This page covers the public configuration context for using the Jointech GP 6000 with the Plaspy platform. It focuses on the practical server settings, typical prerequisites, and the publicly available SMS configuration commands used to point the tracker to Plaspy so the device can report location and events to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Where applicable this page includes the GP 6000 SMS command examples that are published for configuring GPRS server and APN values.

## Configuration Overview

The goal of configuring a GP 6000 for Plaspy is to prepare the tracker to send its telemetry to the Plaspy server endpoint, validate the connectivity, and confirm the device appears and reports correctly in the Plaspy platform.

- Configure the device server settings so the tracker sends data to Plaspy.
- Set or verify the APN and any APN credentials required for mobile data.
- Choose the transport (UDP or TCP) and set the common Plaspy port.
- Use the tracker SMS or manufacturer tool to apply the server and APN settings.
- Validate the device is reporting to Plaspy and visible in the platform.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and accessible Jointech GP 6000 device with SMS and GPRS enabled.
- A valid SIM card installed with mobile data and the correct APN for the network operator.
- Access to an authorized phone number for sending SMS configuration commands or access to the manufacturer configuration tool.
- The device ID (Tracker ID) required by the GP 6000 SMS command syntax.
- Basic knowledge of whether the device should use UDP or TCP for transport, depending on installation needs.
- Ability to verify outgoing connections on the network or check device reporting on Plaspy after configuration.

## How This Tracker Connects to Plaspy

When configured, the GP 6000 sends location and event data over GPRS using TCP or UDP to the shared Plaspy endpoint and port. Plaspy then automatically recognizes the tracker protocol so devices appear correctly in the platform without unique port assignments.

- The tracker is set to point to d.plaspy.com or 54.85.159.138 on port 8888.
- Telemetry is transmitted over GPRS using the selected transport protocol UDP or TCP.
- Plaspy automatically detects the tracker protocol and processes incoming messages.
- Proper APN and optional APN credentials must be configured for the device to use mobile data.
- After successful configuration the device becomes visible and reports real time positions and events in Plaspy.

## Common Configuration Workflow

1. Access the official Jointech configuration method for your GP 6000, such as SMS command configuration or the manufacturer PC tool, according to the device manual.
2. Enter the Plaspy server domain or IP by specifying d.plaspy.com or 54.85.159.138 in the server setting.
3. Set the server port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP if the tracker requires an explicit transport selection.
5. Configure the device APN and any APN username and password if required by your mobile operator.
6. Apply or save the configuration on the device and restart the tracker if the procedure requires a reboot.
7. Validate that the GP 6000 reports to Plaspy and that position and event messages appear in the platform.

## Example Configuration Commands

The GP 6000 supports SMS-based configuration. Below are the publicly available SMS commands used to set the GPRS server and APN values. Replace the placeholders with your device ID and operator values.

First, type the device ID (Tracker ID) required by these commands as the leading identifier.

1) Set the GPRS server and APN
```
({{trackerID}},2,S02,129,1,54.85.159.138,8888,[apn])
```
- This SMS command sets the server IP, port, and APN.
- Replace {{trackerID}} with your tracker ID and [apn] with your mobile operator APN.
- If your installation tool accepts the domain instead of the IP, you can use d.plaspy.com where supported by the tracker firmware.

2) Set APN username and password (optional)
```
({{trackerID}},2,S24,129,1,[apnu],[apnp])
```
- This SMS command sets the APN username ([apnu]) and APN password ([apnp]) if your operator requires them.
- If no APN credentials are needed, this command can be omitted.

Notes on placeholders:
- {{trackerID}} is the device's unique ID or identifier required in GP 6000 SMS syntax.
- [apn] is the mobile data APN for your SIM card.
- [apnu] and [apnp] are optional APN username and password values.

## Configuration Notes

- GP 6000 configuration can be SMS based as shown above or done via the official Jointech PC tool; follow the method that matches your firmware and local installation practice.
- Transport choice (UDP vs TCP) can affect reliability and firewall traversal; choose based on your network and operational needs.
- Firmware revisions and hardware variants can change supported SMS syntax or server field behavior; confirm command formats with current Jointech documentation.
- Plaspy uses the same port 8888 for all devices and will automatically detect the tracker protocol, so consistent port configuration is important.
- Keep a record of any SMS commands sent and verify device reporting in Plaspy after configuration.

## Why Use Plaspy with This Configuration

Using the Jointech GP 6000 configured to report to Plaspy provides centralized visibility and operational monitoring for vehicles and assets. With the server and APN set correctly the GP 6000 can transmit location and event data to Plaspy so fleet managers and operators can track movements, receive alerts, and analyze journeys within the platform.

To learn more about Plaspy and full platform capabilities visit https://www.plaspy.com. For the latest device specific command formats firmware notes and installation guidance verify the Jointech documentation at https://www.jointcontrols.com/ as manufacturer specifications and procedures can change over time.
