---
slug: /topshine/mt01w_4g/configuration
id: mt01w_4g-configuration
sidebar_label: Configuration
title: TopShine - MT01W-4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopShine MT01W 4G tracker and Plaspy compatibility with server settings and setup steps
keywords:
  - TopShine MT01W 4G configuration
  - TopShine MT01W setup
  - MT01W 4G Plaspy configuration
  - Plaspy tracker setup
  - GPS tracker configuration guide
  - vehicle tracking setup
  - server settings Plaspy
  - GPS tracker SMS commands
  - fleet tracking configuration
  - MT01W 4G server setup
---

# TopShine - MT01W-4G Configuration

This page documents the public configuration context for using the TopShine MT01W-4G tracker with the Plaspy platform. It describes the practical server settings and the manufacturer provided SMS commands that are commonly used to prepare the device for reporting to Plaspy. The MT01W-4G is a compact, video capable 4G CAT1 tracker with a built in WiFi hotspot and integrated telemetry features that make it suitable for fleet management, in vehicle video monitoring, and security applications.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device points to the platform. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type and the vendor configuration tools. The MT01W-4G supports SMS based configuration in the public commands shown below and these commands include the device default password 000000 when applicable.

## Configuration Overview

This configuration process prepares the MT01W-4G to reliably communicate with Plaspy and to appear in the platform for live tracking and event reporting. The goal is to apply the correct APN and server settings, choose the desired transport, and confirm the device is actively reporting.

- Set the device network APN and optional APN credentials so the tracker can use mobile data.
- Point the tracker to the Plaspy server endpoint and confirm the server IP or domain and the port are set to Plaspy values.
- Select the transport protocol if the device requires a choice between UDP or TCP.
- Apply an appropriate reporting interval and switch the device into GPRS data mode for live reporting.
- Validate connectivity by checking the device IMEI and verifying the device appears and reports on Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on device requirements  
- Plaspy automatically detects the tracker protocol once the device reports to the platform

All devices in Plaspy use the same port 8888 and the platform will detect the appropriate protocol automatically.

## Typical Requirements Before Setup

- A charged and powered MT01W-4G unit with accessible wiring and any required camera or sensor connections completed.
- An active cellular SIM capable of data and SMS for operator APN configuration and GPRS reporting.
- Knowledge of the carrier APN and optional APN username and password for the SIM in use.
- Access to the device IMEI number for device identification and for some SMS configuration commands.
- Ability to send SMS commands to the device or access to the manufacturer configuration tool if SMS is not used.
- Administrative access to your Plaspy account so you can confirm the device appears and is reporting after configuration.

## How This Tracker Connects to Plaspy

When configured correctly the MT01W-4G will send location, event and telemetry data to the Plaspy server endpoint and port. Plaspy ingests the device reports and maps the tracker to your account so you can monitor live positions, alarms, and associated video feeds where available.

- The tracker is configured to report to the shared Plaspy server endpoint and port 8888.  
- The device sends periodic position and event reports over the selected transport (UDP or TCP).  
- Plaspy detects the device protocol automatically and begins processing incoming reports.  
- Telemetry and alarm events are forwarded to your Plaspy dashboard for monitoring and alerts.  
- Video streams from the tracker WiFi cameras can be associated with the device in Plaspy for synchronized review.

## Common Configuration Workflow

1. Access the official TopShine configuration method for your unit, typically SMS commands or the vendor tool, and confirm the device default password if required.  
2. Enter the Plaspy server endpoint using either d.plaspy.com or the IP address 54.85.159.138 as required by the device interface.  
3. Set the port to 8888 which Plaspy uses for all devices.  
4. Choose UDP or TCP transport if the tracker requires a transport selection.  
5. Configure the SIM APN and any APN credentials so the tracker can connect over mobile data.  
6. Apply or save the configuration and switch the device to GPRS data mode if necessary.  
7. Restart or power cycle the device if the manufacturer recommends a reboot to apply settings.  
8. Validate that the device reports to Plaspy and appears in your platform console using the device IMEI.

## Example Configuration Commands

The MT01W-4G supports SMS based configuration. The sample commands below use the tracker default password 000000. Preserve the placeholders when sending commands and replace them with your actual values.

- Note on password: these examples use the device default password 000000. Use your device password if it has been changed.

- Factory reset command (optional initial step):
```text
W000000,990,099###
```

- Set device ID (device uses the IMEI for identification; the device command requires a 14 digit ID derived from the IMEI):
```text
W000000,010,<14_digit_device_id>
```
Replace \<14_digit_device_id> with the first 14 digits derived from the device IMEI as required by the tracker. Plaspy identifies devices by the IMEI.

- Set the operator APN with optional username and password placeholders:
```text
W000000,011,[apn],[apnu],[apnp]
```
If no APN username or password are required, send only the APN using the same command pattern and omit the optional fields. Placeholders [apn], [apnu], and [apnp] should be replaced with your carrier values.

- Set the GPRS server to the public Plaspy server IP and port:
```text
W000000,012,54.85.159.138,8888
```
This command sets the tracker to report to Plaspy using the provided IP and port. If your device supports a domain name instead of an IP, you may use d.plaspy.com where supported by the device firmware.

- Switch the device to GPRS data mode:
```text
W000000,013,2
```

- Set the position update interval (example value 6):
```text
W000000,014,6
```
Adjust the interval number to fit your reporting frequency requirements.

- Verify or request the device IMEI:
```text
W000000,601
```

Send each SMS from an authorized phone number as described by the manufacturer and replace placeholders with your real values. Maintain the command order when performing initial provisioning where indicated.

## Configuration Notes

- SMS based configuration is documented by the manufacturer and the above commands are the public examples provided for this device series. Use SMS or vendor tools based on your installation practice.  
- Firmware and hardware revisions may change exact command syntax or supported parameters. Always confirm commands against the device firmware revision.  
- Choose UDP or TCP according to your device options and network reliability preferences. Plaspy will accept either transport and will auto detect the protocol.  
- Plaspy uses port 8888 for all devices so ensuring the tracker points to that port is critical for connectivity.  
- Keep APN credentials and device passwords secure and consider changing default passwords after provisioning where supported.

## Why Use Plaspy with This Configuration

Pairing the TopShine MT01W-4G with Plaspy gives fleets and security operators centralized visibility of location, events and synchronized video for better operational oversight and incident verification. Using the shared Plaspy server settings and the published configuration commands you can provision devices consistently across a fleet and rely on Plaspy to automatically detect the tracker protocol when the device reports.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific instructions, firmware notes and manufacturer guidance verify setup details on the TopShine website https://www.gztopshine.com/ since manufacturer procedures and firmware behavior can change over time.
