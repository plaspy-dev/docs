---
slug: /gotop/g23d/configuration
id: g23d-configuration
sidebar_label: Configuration
title: GOTOP - G23D Configuration
sidebar_class_name: menu_item_tracker
description: Public guidance to configure GOTOP G23D to report to Plaspy servers with practical setup and verification steps
keywords:
  - GOTOP G23D
  - GOTOP G23D configuration
  - GOTOP G23D setup
  - G23D Plaspy
  - Plaspy tracker configuration
  - GOTOP GPS tracker
  - G23D server configuration
  - vehicle tracking G23D
  - fleet management GOTOP
  - G23D installation guide
---

# GOTOP - G23D Configuration

This page covers the public configuration context for using the GOTOP G23D tracker with Plaspy. It gathers the practical server settings and workflow guidance needed to point a G23D device at Plaspy so the device can be discovered and monitored on the platform. Use this as a reference for preparing the device before connecting it to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. The guidance below focuses on the public Plaspy endpoint and the general process to configure the tracker so it reports correctly to the platform.

## Configuration Overview

This configuration process prepares the G23D to communicate with the Plaspy server so location and status data appear in your Plaspy account. It centers on setting the server endpoint, transport, and port, validating connectivity, and confirming the tracker is visible in Plaspy.

- Set the device to report to the Plaspy server endpoint and the required port.
- Choose the device transport mode if the tracker requires a selection between UDP and TCP.
- Save or apply configuration and restart the tracker if the manufacturer workflow requires it.
- Validate the device is sending data and appears online in Plaspy.
- Troubleshoot connectivity with manufacturer tools and confirm SIM and power status as needed.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the GOTOP G23D:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- All devices in Plaspy use the same port
- Plaspy automatically detects the tracker protocol so no protocol selection is required on the platform side

Include these values in the device configuration according to the manufacturer tool you are using.

## Typical Requirements Before Setup

- Reliable power to the tracker according to the GOTOP G23D installation instructions
- Access to the official GOTOP configuration tool or manufacturer recommended method for changing server and port
- A working Micro SIM and cellular connectivity compatible with the G23D hardware and regional network
- Physical access to the device or installer access to enable configuration and restart
- A Plaspy account to confirm the device appears online after configuration
- Basic knowledge of choosing UDP or TCP when the device firmware prompts for transport selection

## How This Tracker Connects to Plaspy

When configured, the G23D reports location and device events to the shared Plaspy server endpoint and port so fleet managers can view position and status in the platform. Plaspy receives the tracker data and automatically determines the protocol used, which simplifies onboarding across many tracker models.

- The G23D is set to send packets to d.plaspy.com or 54.85.159.138
- Data is sent to port 8888 using either UDP or TCP as configured on the device
- Plaspy auto detects the tracker protocol so the platform side does not need manual protocol selection
- Events such as position updates and alarms are forwarded to Plaspy for display and alerting
- Device visibility and online status are validated in Plaspy after successful reporting

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software as described by the manufacturer.
2. Locate the TCP UDP server or network settings in the configuration interface.
3. Enter the Plaspy server address as d.plaspy.com or alternatively 54.85.159.138.
4. Set the device port to 8888 exactly.
5. Choose UDP or TCP on the device if the firmware requires a transport selection.
6. Apply or save the configuration in the device tool.
7. Restart the device if the tool or documentation indicates a restart is required.
8. Validate the device reports to Plaspy by checking your Plaspy account for an online status and recent position updates.

## Example Configuration Commands

The provided model configuration did not include public command strings for the GOTOP G23D. Exact command formats or configuration messages vary by manufacturer firmware and the configuration method you use. For the G23D, manufacturers commonly provide one of these configuration methods: a serial UART TTL tool, a vendor desktop application, or an on device menu. Consult the official GOTOP configuration guide for the exact commands or GUI steps that apply to your firmware and revision.

If you obtain official public commands from GOTOP, include them here using the manufacturer recommended order, and preserve any placeholders such as APN or user credentials. Placeholders should be kept as provided to allow substitution with your carrier information.

## Configuration Notes

- Firmware differences and hardware revisions can change configuration field names and available options; always confirm the exact steps for your G23D firmware version.
- When the device firmware offers both TCP and UDP transports, test the transport that your network allows and choose the one that provides reliable delivery for your use case.
- Plaspy requires the device to target the shared server endpoint and port; using d.plaspy.com or 54.85.159.138 with port 8888 ensures the device can reach Plaspy.
- Keep manufacturer documentation on hand for wiring, SIM setup, and any I O or ACC wiring related steps that may affect reporting.
- If you use a third party installer or integrator, confirm they apply these exact server settings and validate device visibility in Plaspy after installation.

## Why Use Plaspy with This Configuration

Configuring the GOTOP G23D to report to Plaspy gives organizations centralized visibility of vehicle locations and key device events using a common server endpoint and port. Because Plaspy automatically detects the tracker protocol, onboarding G23D units is straightforward once the server, IP, and port are set correctly on the device.

To learn more about Plaspy and how it supports fleet tracking across multiple device models visit https://www.plaspy.com. For the most current device specific configuration methods, firmware notes, and hardware details for the GOTOP G23D consult the official GOTOP website https://www.gotop.cc/ as manufacturer specifications and setup procedures can change over time.
