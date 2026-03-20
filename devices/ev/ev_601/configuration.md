---
slug: /ev/ev_601/configuration
id: ev_601-configuration
sidebar_label: Configuration
title: EV - EV-601 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the EV EV-601 tracker with Plaspy server settings SMS commands and practical setup steps
keywords:
  - EV EV-601 configuration
  - EV EV-601 setup
  - EV EV-601 Plaspy
  - EV tracker configuration
  - vehicle GPS tracker setup
  - Plaspy server configuration
  - GPS tracker SMS commands
  - GSM GPRS tracker setup
  - EV-601 APN configuration
  - tracker protocol detection
---

# EV - EV-601 Configuration

This page covers the public configuration context for using the EV EV-601 tracker with Plaspy. It explains the shared Plaspy server settings you will point the device to, the SMS setup commands provided by the manufacturer, and the general steps required to get the EV-601 reporting into Plaspy for real time vehicle monitoring.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Where available, this page includes the EV-601 SMS commands provided in public documentation and guidance about how those commands map to the Plaspy server settings.

## Configuration Overview

The goal of this configuration process is to prepare the EV-601 so it reliably communicates location and event data to the Plaspy platform. The public manufacturer commands for the EV-601 show SMS based configuration as a supported method; Plaspy accepts device traffic on a single shared port and detects the protocol automatically.

- Configure the device APN and network access so GPRS data can be sent to Plaspy.
- Set the device time zone and basic parameters for correct timestamps.
- Point the tracker to the Plaspy server endpoint so reporting arrives in the platform.
- Validate transport (UDP or TCP) and confirm the device is sending to the shared Plaspy port.
- Confirm the tracker appears in Plaspy and is reporting location updates and events.

## Plaspy Server Settings

When configuring the EV-601 for use with Plaspy, use the following public settings exactly as shown:

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888 as the device requires  
- Plaspy automatically detects the tracker protocol so you do not need to specify a protocol to Plaspy beyond the transport choice

Note: Plaspy uses the same port for all supported devices and will detect the protocol automatically.

## Typical Requirements Before Setup

- A powered EV-601 device installed or accessible for configuration and testing.  
- An active SIM card with data enabled and the correct APN for the mobile operator. The EV-601 supports GSM GPRS communications and can be configured by SMS.  
- Access to the manufacturer SMS configuration method or installer tool used for the EV-601.  
- The default device password if required for SMS configuration (public documentation indicates the EV-601 default password is 123456).  
- Contact information for the manufacturer or vendor if the device requires enabling server change options before you can set a custom server.  
- A Plaspy account or access to the Plaspy platform to verify the device appears and reports after configuration.

## How This Tracker Connects to Plaspy

The EV-601 typically sends location and status data to Plaspy over the mobile data network once APN and server settings are applied. Plaspy receives the tracker traffic on a single shared endpoint and port, and automatically detects the protocol used by the device.

- The device is configured to report to the shared Plaspy server endpoint d.plaspy.com or the equivalent IP 54.85.159.138.  
- Data is sent to port 8888 on that endpoint.  
- The tracker may use UDP or TCP transport; choose the transport the device supports and the network permits.  
- Plaspy automatically detects the tracker protocol so incoming messages are routed correctly in the platform.  
- If SMS reporting or command replies are used, those remain separate from the GPRS data path and are handled via standard SMS channels.

## Common Configuration Workflow

1. Access the official EV manufacturer configuration method or software. For many installations this includes SMS commands or an authorized installer tool.  
2. Ensure the device has a working SIM with data and set the APN for the mobile operator. Use the APN values required by the SIM provider.  
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings as allowed by the device.  
4. Set the server port to 8888. Plaspy uses the same port for all supported devices.  
5. If the device requires a transport selection, choose UDP or TCP according to device capability and network conditions. Plaspy supports either on port 8888.  
6. Apply or save the device configuration; if the device requires a firmware or option to be enabled to change the server, contact the manufacturer or vendor for that enablement.  
7. Restart or power cycle the device if required and validate that the EV-601 reports to Plaspy and appears in the platform.

## Example Configuration Commands

The EV-601 public configuration examples are provided as SMS commands in the manufacturer documentation. The device default password shown in public materials is 123456. Send these commands by SMS to the device in the order below as part of initial setup.

- Set the time zone to UTC+0 (default password 123456):
```
123456L+00
```

- Set the operator APN. Replace {{apn}} with your operator APN. If your operator requires APN username or APN password, include {{apnu}} and {{apnp}} respectively. The APN username and password placeholders are optional and should only be included if required by your SIM provider:
```
123456S1,{{apn}},{{apnu}},{{apnp}}
```

- Set the server IP and port for Plaspy. Note the manufacturer documentation indicates you may need to contact the manufacturer to enable the option to change server settings before this command will be accepted:
```
123456I1,54.85.159.138,8888
```

Important notes for the commands above:
- Commands are sent by SMS to the device phone number unless you are using an alternate official configuration tool.  
- The default SMS password shown in public documentation is 123456; if you have changed the device password, use the current password instead.  
- The server command uses the Plaspy server IP and the shared port 8888; Plaspy will accept traffic to d.plaspy.com or 54.85.159.138 on port 8888 and will detect the protocol automatically.

## Configuration Notes

- Firmware differences and hardware revisions can change exact command syntax or required steps; verify with manufacturer notes if a command is rejected.  
- The EV-601 supports SMS based configuration in public examples, which is useful when there is no direct access to a configuration tool.  
- Choose UDP or TCP according to network behavior; Plaspy accepts either on port 8888 and will auto detect the protocol.  
- Some EV-601 units may require the vendor or manufacturer to enable the server change option before accepting custom server commands. Contact the vendor if needed.  
- Keep APN credentials secure; placeholders {{apn}}, {{apnu}}, and {{apnp}} represent the APN, APN username, and APN password respectively and should be filled with your operator values.

## Why Use Plaspy with This Configuration

Configuring the EV-601 to report to Plaspy gives fleet managers and vehicle owners centralized visibility of live location, events, and alerts in a single platform. Using the shared Plaspy server endpoint and the documented SMS configuration commands enables a straightforward integration path for devices that support GSM GPRS and SMS.

If you want to learn more about Plaspy and how it can accept EV-601 device data, visit https://www.plaspy.com. For the latest device-specific configuration methods, firmware behavior, and manufacturer details for the EV-601, verify current information on the manufacturer site http://www.eviewltd.com/ .
