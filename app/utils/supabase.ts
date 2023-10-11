export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      links: {
        Row: {
          action: string | null
          active: boolean | null
          comments: string | null
          counter: number | null
          created_at: string
          id: number
          link: string | null
          raw_message: string | null
        }
        Insert: {
          action?: string | null
          active?: boolean | null
          comments?: string | null
          counter?: number | null
          created_at?: string
          id?: number
          link?: string | null
          raw_message?: string | null
        }
        Update: {
          action?: string | null
          active?: boolean | null
          comments?: string | null
          counter?: number | null
          created_at?: string
          id?: number
          link?: string | null
          raw_message?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      inc_link_counter: {
        Args: {
          link_id: number
        }
        Returns: number
      }
      increment_counter: {
        Args: {
          link_id: number
        }
        Returns: number
      }
      increment_link_counter: {
        Args: {
          link_id: number
        }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
