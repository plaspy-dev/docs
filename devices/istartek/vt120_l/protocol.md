---
slug: /istartek/vt120_l/protocol
id: vt120_l-protocol
sidebar_label: Protocol
title: iStartek - VT120-L Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for iStartek VT120-L and how it communicates with Plaspy for reliable fleet tracking
keywords:
  - iStartek VT120-L
  - VT120-L protocol
  - iStartek GPS tracker protocol
  - VT120-L GPS protocol
  - VT120-L Plaspy compatibility
  - iStartek tracking protocol
  - vehicle tracking VT120-L
  - Plaspy device protocol
  - VT120-L telemetry protocol
  - GPS tracker VT120-L
---

# iStartek - VT120-L Protocol

This page describes the public protocol context for using the iStartek VT120-L with Plaspy. It focuses on how the device communicates with Plaspy in non sensitive, implementation agnostic terms so integrators and fleet managers understand the role of the tracker protocol in a successful deployment.

The VT120-L is a compact, Plaspy compatible GPS tracker that sends GNSS position, telemetry and alarm events over cellular networks. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary by firmware version, hardware revision and manufacturer implementation. Use this page as a protocol orientation and consult the device manufacturer for firmware specific details.

## Protocol Overview

The tracker protocol is the device's standard method for reporting GNSS positions, status and alarms to a remote server. For the VT120-L, the protocol enables the tracker to identify itself to Plaspy, send buffered location and telemetry messages, and support remote management features that improve operational reliability.

- Deliver GNSS position and time data to the server so Plaspy can render live location and historical playback.
- Report vehicle telemetry and status events such as ACC ignition, alarm triggers and mileage for analytics.
- Buffer data during network outages and upload stored records to ensure route continuity when connectivity is restored.
- Support remote management workflows such as firmware updates and configuration changes when implemented by the manufacturer.
- Provide redundant delivery options through the device dual server upload design to increase chance of successful data receipt.

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections on a shared endpoint and automatically recognizes the reporting protocol used by supported trackers. In normal setups a VT120-L that is correctly pointed at the Plaspy endpoint will begin reporting without requiring manual protocol selection inside Plaspy.

- Plaspy accepts device traffic at the domain d.plaspy.com and the server IP 54.85.159.138.
- All devices supported by Plaspy use the same server port, simplifying device configuration and onboarding.
- Plaspy automatically detects the tracker protocol from incoming device reports so manual protocol selection is usually unnecessary.
- If a device is configured to point to the Plaspy endpoint and uses the correct transport, the platform will parse and ingest position and telemetry messages.
- For troubleshooting, confirm the device points to the Plaspy domain or IP and that outbound mobile data connectivity is active.

## Transport and Connection Context

Transport selection is a device setting and influences how the VT120-L delivers data to Plaspy. The VT120-L can be configured to use either UDP or TCP depending on device firmware and installer preference, and it supports pointing at a DNS name or a direct IP address for the server.

- The VT120-L may be configured to use UDP or TCP on port 8888 to report data to Plaspy.
- Devices can target the Plaspy server by domain d.plaspy.com or by direct IP 54.85.159.138.
- Plaspy uses port 8888 for all supported devices, which simplifies fleet scale provisioning.
- Choose UDP for lower overhead and lower latency in lossy networks, or TCP when a connection oriented transport is preferred by the device firmware.
- Confirm the device APN and mobile data settings are correct so outbound connections to the Plaspy endpoint succeed.

## Protocol Compatibility Notes

- Firmware variations can change message timing, optional fields and supported remote commands; always verify firmware release notes for protocol nuances.
- Hardware revisions or regional variants may alter available I/O behavior or supported reporting intervals.
- Transport choice (UDP versus TCP) affects delivery characteristics but does not change the high level purpose of the reporting protocol.
- The VT120-L supports dual server upload which improves redundancy; confirm both server targets are configured if using manufacturer redundancy settings.
- Manufacturer configuration tools may offer DNS or direct IP entry; pointing a device to d.plaspy.com or 54.85.159.138 with port 8888 is the standard Plaspy approach.
- Validate any third party middleware or SIM provider settings that could modify outbound traffic, such as proxying or NAT behaviors.

## Why Protocol Understanding Matters

Knowing how the VT120-L communicates helps ensure reliable onboarding, accurate telemetry and smoother troubleshooting when integrating with Plaspy. A clear protocol context reduces time spent diagnosing connectivity and data interpretation issues, and supports better long term operational outcomes.

- Ensures correct server and transport configuration so the device reports successfully to Plaspy.
- Helps troubleshoot intermittent reporting by distinguishing network, transport, and device firmware causes.
- Informs expectations about buffered upload behavior and how historical routes are recovered after outages.
- Guides decisions about transport selection for a given fleet environment or SIM plan.
- Enables planners to confirm that device features like ACC reporting, alarms and remote updates will integrate into Plaspy workflows.

## Why Use Plaspy with This Protocol

Using the VT120-L with Plaspy provides fleets and security teams dependable location, telemetry and alert delivery in a compact, vehicle friendly form factor. Plaspy’s automatic protocol detection and shared server configuration reduce configuration overhead so installations can scale more efficiently across vehicles and technicians.

To learn more about Plaspy and how it handles device connectivity, visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior and manufacturer implementation notes please verify information on the iStartek official website https://istartek.com/.
